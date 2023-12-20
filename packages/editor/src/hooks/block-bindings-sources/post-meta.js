/**
 * WordPress dependencies
 */
import { useSelect } from '@wordpress/data';
import { store as coreStore } from '@wordpress/core-data';
import { createHigherOrderComponent } from '@wordpress/compose';
import { addFilter } from '@wordpress/hooks';
/**
 * Internal dependencies
 */
import BlockBindingsFill from '../../components/block-bindings/bindings-ui';
import BlockBindingsFieldsList from '../../components/block-bindings/fields-list';
import { store as editorStore } from '../../store';

if ( window.__experimentalBlockBindings ) {
	// External sources could do something similar.

	const withCoreSources = createHigherOrderComponent(
		( BlockEdit ) => ( props ) => {
			const blockBindingsAllowedBlocks = {
				'core/paragraph': [ 'content' ],
				'core/heading': [ 'content' ],
				'core/image': [ 'url', 'title' ],
				'core/button': [ 'url', 'text' ],
			};
			const { name, isSelected, context } = props;
			// If the block is not allowed, return the original BlockEdit.
			if ( ! blockBindingsAllowedBlocks[ name ] ) {
				return <BlockEdit key="edit" { ...props } />;
			}
			const fields = [];
			if ( isSelected ) {
				const data = useSelect( ( select ) => {
					const postId = context.postId
						? context.postId
						: select( editorStore ).getCurrentPostId();
					const postType = context.postType
						? context.postType
						: select( editorStore ).getCurrentPostType();
					// If not a post type, return null.
					if ( postType !== 'post' && postType !== 'page' ) {
						return null;
					}
					const { getEntityRecord } = select( coreStore );
					return getEntityRecord( 'postType', postType, postId );
				}, [] );

				if ( data ) {
					// Adapt the data to the format expected by the fields list.
					// Prettifying the name until we receive the label from the REST API endpoint.
					const keyToLabel = ( key ) => {
						return key
							.split( '_' )
							.map(
								( word ) =>
									word.charAt( 0 ).toUpperCase() +
									word.slice( 1 )
							)
							.join( ' ' );
					};
					Object.entries( data.meta ).forEach( ( [ key, value ] ) => {
						fields.push( {
							key,
							label: keyToLabel( key ),
							value,
						} );
					} );
				}
			}

			return (
				<>
					{ isSelected && fields.length !== 0 && (
						<>
							<BlockBindingsFill
								source="post_meta"
								label="Post Meta"
							>
								<BlockBindingsFieldsList
									fields={ fields }
									source="post_meta"
									{ ...props }
								/>
							</BlockBindingsFill>
						</>
					) }
					<BlockEdit key="edit" { ...props } />
				</>
			);
		},
		'withToolbarControls'
	);

	addFilter(
		'editor.BlockEdit',
		'core/block-bindings-ui/add-sources',
		withCoreSources
	);
}
