<?php
/**
 * Block support to enable per-section styling of block types via
 * block style variations.
 *
 * @package gutenberg
 */

/**
 * Get the class name for this application of this block's variation styles.
 *
 * @since 6.6.0
 *
 * @param array  $block     Block object.
 * @param string $variation Slug for the block style variation.
 *
 * @return string The unique class name.
 */
function gutenberg_get_block_style_variation_class_name( $block, $variation ) {
	return 'is-style-' . $variation . '--' . md5( serialize( $block ) );
}

/**
 * Determines the block style variation names within a CSS class string.
 *
 * @since 6.6.0
 *
 * @param string $class_string CSS class string to look for a variation in.
 *
 * @return array|null The block style variation name if found.
 */
function gutenberg_get_block_style_variation_name_from_class( $class_string ) {
	if ( ! is_string( $class_string ) ) {
		return null;
	}

	preg_match_all( '/\bis-style-(?!default)(\S+)\b/', $class_string, $matches );
	return $matches[1] ?? null;
}

/**
 * Render the block style variation's styles.
 *
 * In the case of nested blocks with variations applied, we want the parent
 * variation's styles to be rendered before their descendants. This solves the
 * issue of a block type being styled in both the parent and descendant: we want
 * the descendant style to take priority, and this is done by loading it after,
 * in the DOM order. This is why the variation stylesheet generation is in a
 * different filter.
 *
 * @since 6.6.0
 *
 * @param array $parsed_block The parsed block.
 *
 * @return array The parsed block with block style variation classname added.
 */
function gutenberg_render_block_style_variation_support_styles( $parsed_block ) {
	$classes    = $parsed_block['attrs']['className'] ?? null;
	$variations = gutenberg_get_block_style_variation_name_from_class( $classes );

	if ( ! $variations ) {
		return $parsed_block;
	}

	$tree       = WP_Theme_JSON_Resolver_Gutenberg::get_merged_data();
	$theme_json = $tree->get_raw_data();

	// Only the first block style variation with data is supported.
	$variation_data = array();
	foreach ( $variations as $variation ) {
		$variation_data = $theme_json['styles']['blocks'][ $parsed_block['blockName'] ]['variations'][ $variation ] ?? array();

		if ( ! empty( $variation_data ) ) {
			break;
		}
	}

	if ( empty( $variation_data ) ) {
		return $parsed_block;
	}

	$config = array(
		'version' => WP_Theme_JSON_Gutenberg::LATEST_SCHEMA,
		'styles'  => $variation_data,
	);

	$class_name         = gutenberg_get_block_style_variation_class_name( $parsed_block, $variation );
	$updated_class_name = $parsed_block['attrs']['className'] . " $class_name";

	$class_name = ".$class_name";

	if ( ! is_admin() ) {
		remove_filter( 'wp_theme_json_get_style_nodes', 'wp_filter_out_block_nodes' );
	}

	$variation_theme_json = new WP_Theme_JSON_Gutenberg( $config, 'blocks' );
	$variation_styles     = $variation_theme_json->get_stylesheet(
		array( 'styles' ),
		array( 'custom' ),
		array(
			'root_selector'           => $class_name,
			'skip_root_layout_styles' => true,
			'scope'                   => $class_name,
		)
	);

	if ( ! is_admin() ) {
		add_filter( 'wp_theme_json_get_style_nodes', 'wp_filter_out_block_nodes' );
	}

	if ( empty( $variation_styles ) ) {
		return $parsed_block;
	}

	wp_register_style( 'block-style-variation-styles', false, array( 'global-styles' ) );
	wp_add_inline_style( 'block-style-variation-styles', $variation_styles );

	/*
	 * Add variation instance class name to block's className string so it can
	 * be enforced in the block markup via render_block filter.
	 */
	_wp_array_set( $parsed_block, array( 'attrs', 'className' ), $updated_class_name );

	return $parsed_block;
}

/**
 * Ensure the variation block support class name generated and added to
 * block attributes in the `render_block_data` filter gets applied to the
 * block's markup.
 *
 * @see gutenberg_render_block_style_variation_support_styles
 *
 * @since 6.6.0
 *
 * @param  string $block_content Rendered block content.
 * @param  array  $block         Block object.
 *
 * @return string                Filtered block content.
 */
function gutenberg_render_block_style_variation_class_name( $block_content, $block ) {
	if ( ! $block_content || empty( $block['attrs']['className'] ) ) {
		return $block_content;
	}

	/*
	 * Matches a class prefixed by `is-style`, followed by the
	 * variation slug, then `--`, and finally a hash.
	 *
	 * See `gutenberg_get_block_style_variation_class_name` for class generation.
	 */
	preg_match( '/\bis-style-(\S+?--\w+)\b/', $block['attrs']['className'], $matches );

	if ( empty( $matches ) ) {
		return $block_content;
	}

	$tags = new WP_HTML_Tag_Processor( $block_content );

	if ( $tags->next_tag() ) {
		/*
		 * Ensure the variation instance class name set in the
		 * `render_block_data` filter is applied in markup.
		 * See `gutenberg_render_block_style_variation_support_styles`.
		 */
		$tags->add_class( $matches[0] );
	}

	return $tags->get_updated_html();
}

/**
 * Collects block style variation data for merging with theme.json data.
 * As each block style variation is processed it is registered if it hasn't
 * been already. This registration is required for later sanitization of
 * theme.json data.
 *
 * @since 6.6.0
 *
 * @param array $variations Shared block style variations.
 *
 * @return array Block variations data to be merged under styles.blocks
 */
function gutenberg_resolve_and_register_block_style_variations( $variations ) {
	$variations_data = array();

	if ( empty( $variations ) ) {
		return $variations_data;
	}

	$registry              = WP_Block_Styles_Registry::get_instance();
	$have_named_variations = ! wp_is_numeric_array( $variations );

	foreach ( $variations as $key => $variation ) {
		$supported_blocks = $variation['blockTypes'] ?? array();

		/*
		 * Standalone theme.json partial files for block style variations
		 * will have their styles under a top-level property by the same name.
		 * Variations defined within an existing theme.json or theme style
		 * variation will themselves already be the required styles data.
		 */
		$variation_data = $variation['styles'] ?? $variation;

		if ( empty( $variation_data ) ) {
			continue;
		}

		/*
		 * Block style variations read in via standalone theme.json partials
		 * need to have their name set to the kebab case version of their title.
		 */
		$variation_name  = $have_named_variations ? $key : _wp_to_kebab_case( $variation['title'] );
		$variation_label = $variation['title'] ?? $variation_name;

		foreach ( $supported_blocks as $block_type ) {
			$registered_styles = $registry->get_registered_styles_for_block( $block_type );

			// Register block style variation if it hasn't already been registered.
			if ( ! array_key_exists( $variation_name, $registered_styles ) ) {
				gutenberg_register_block_style(
					$block_type,
					array(
						'name'  => $variation_name,
						'label' => $variation_label,
					)
				);
			}

			// Add block style variation data under current block type.
			$path = array( $block_type, 'variations', $variation_name );
			_wp_array_set( $variations_data, $path, $variation_data );
		}
	}

	return $variations_data;
}

/**
 * Merges variations data with existing theme.json data ensuring that the
 * current theme.json data values take precedence.
 *
 * @since 6.6.0
 *
 * @param array                        $variations_data Block style variations data keyed by block type.
 * @param WP_Theme_JSON_Data_Gutenberg $theme_json      Current theme.json data.
 * @param string                       $origin          Origin for the theme.json data.
 *
 * @return WP_Theme_JSON_Gutenberg The merged theme.json data.
 */
function gutenberg_merge_block_style_variations_data( $variations_data, $theme_json, $origin = 'theme' ) {
	if ( empty( $variations_data ) ) {
		return $theme_json;
	}

	$variations_theme_json_data = array(
		'version' => WP_Theme_JSON_Gutenberg::LATEST_SCHEMA,
		'styles'  => array( 'blocks' => $variations_data ),
	);

	$variations_theme_json = new WP_Theme_JSON_Data_Gutenberg( $variations_theme_json_data, $origin );

	/*
	 * Merge the current theme.json data over shared variation data so that
	 * any explicit per block variation values take precedence.
	 */
	return $variations_theme_json->update_with( $theme_json->get_data() );
}

/**
 * Merges any shared block style variation definitions from a theme style
 * variation into their appropriate block type within theme json styles. Any
 * custom user selections already made will take precedence over the shared
 * style variation value.
 *
 * @since 6.6.0
 *
 * @param WP_Theme_JSON_Data_Gutenberg $theme_json Current theme.json data.
 *
 * @return WP_Theme_JSON_Data_Gutenberg
 */
function gutenberg_resolve_block_style_variations_from_theme_style_variation( $theme_json ) {
	$theme_json_data   = $theme_json->get_data();
	$shared_variations = $theme_json_data['styles']['blocks']['variations'] ?? array();
	$variations_data   = gutenberg_resolve_and_register_block_style_variations( $shared_variations );

	return gutenberg_merge_block_style_variations_data( $variations_data, $theme_json, 'user' );
}

/**
 * Merges block style variation data sourced from standalone partial
 * theme.json files.
 *
 * @since 6.6.0
 *
 * @param WP_Theme_JSON_Data_Gutenberg $theme_json Current theme.json data.
 *
 * @return WP_Theme_JSON_Data_Gutenberg
 */
function gutenberg_resolve_block_style_variations_from_theme_json_partials( $theme_json ) {
	$block_style_variations = WP_Theme_JSON_Resolver_Gutenberg::get_style_variations( 'block' );
	$variations_data        = gutenberg_resolve_and_register_block_style_variations( $block_style_variations );

	return gutenberg_merge_block_style_variations_data( $variations_data, $theme_json );
}

/**
 * Merges shared block style variations registered within the
 * `styles.blocks.variations` property of the primary theme.json file.
 *
 * @since 6.6.0
 *
 * @param WP_Theme_JSON_Data_Gutenberg $theme_json Current theme.json data.
 *
 * @return WP_Theme_JSON_Data_Gutenberg
 */
function gutenberg_resolve_block_style_variations_from_primary_theme_json( $theme_json ) {
	$theme_json_data        = $theme_json->get_data();
	$block_style_variations = $theme_json_data['styles']['blocks']['variations'] ?? array();
	$variations_data        = gutenberg_resolve_and_register_block_style_variations( $block_style_variations );

	return gutenberg_merge_block_style_variations_data( $variations_data, $theme_json );
}

/**
 * Merges block style variations registered via the block styles registry with a
 * style object, under their appropriate block types within theme.json styles.
 * Any variation values defined within the theme.json specific to a block type
 * will take precedence over these shared definitions.
 *
 * @since 6.6.0
 *
 * @param WP_Theme_JSON_Data_Gutenberg $theme_json Current theme.json data.
 *
 * @return WP_Theme_JSON_Data_Gutenberg
 */
function gutenberg_resolve_block_style_variations_from_styles_registry( $theme_json ) {
	$registry        = WP_Block_Styles_Registry::get_instance();
	$styles          = $registry->get_all_registered();
	$variations_data = array();

	foreach ( $styles as $block_type => $variations ) {
		foreach ( $variations as $variation_name => $variation ) {
			if ( ! empty( $variation['style_data'] ) ) {
				$path = array( $block_type, 'variations', $variation_name );
				_wp_array_set( $variations_data, $path, $variation['style_data'] );
			}
		}
	}

	return gutenberg_merge_block_style_variations_data( $variations_data, $theme_json );
}

/**
 * Enqueues styles for block style variations.
 *
 * @since 6.6.0
 */
function gutenberg_enqueue_block_style_variation_styles() {
	wp_enqueue_style( 'block-style-variation-styles' );
}

// Register the block support.
WP_Block_Supports::get_instance()->register( 'block-style-variation', array() );

add_filter( 'render_block_data', 'gutenberg_render_block_style_variation_support_styles', 10, 2 );
add_filter( 'render_block', 'gutenberg_render_block_style_variation_class_name', 10, 2 );
add_action( 'wp_enqueue_scripts', 'gutenberg_enqueue_block_style_variation_styles', 1 );

// Resolve block style variations from all their potential sources. The order here is deliberate.
add_filter( 'wp_theme_json_data_theme', 'gutenberg_resolve_block_style_variations_from_primary_theme_json', 10, 1 );
add_filter( 'wp_theme_json_data_theme', 'gutenberg_resolve_block_style_variations_from_theme_json_partials', 10, 1 );
add_filter( 'wp_theme_json_data_theme', 'gutenberg_resolve_block_style_variations_from_styles_registry', 10, 1 );

add_filter( 'wp_theme_json_data_user', 'gutenberg_resolve_block_style_variations_from_theme_style_variation', 10, 1 );
