/**
 * Internal dependencies
 */
import type { Style, StyleOptions } from '../../types';
import { generateRule, safeDecodeURI } from '../utils';

const backgroundImage = {
	name: 'backgroundImage',
	generate: ( style: Style, options: StyleOptions ) => {
		const _backgroundImage = style?.background?.backgroundImage;
		if ( typeof _backgroundImage === 'object' && _backgroundImage?.url ) {
			return [
				{
					selector: options.selector,
					key: 'backgroundImage',
					// Passed `url` may already be encoded. To prevent double encoding, decodeURI is executed to revert to the original string.
					value: `url( '${ encodeURI(
						safeDecodeURI( _backgroundImage.url )
					) }' )`,
				},
			];
		}

		/*
		 * If the background image is a string, it could already contain a url() function,
		 * or have a linear-gradient value.
		 */
		if ( typeof _backgroundImage === 'string' ) {
			return generateRule(
				style,
				options,
				[ 'background', 'backgroundImage' ],
				'backgroundImage'
			);
		}

		return [];
	},
};

const backgroundPosition = {
	name: 'backgroundPosition',
	generate: ( style: Style, options: StyleOptions ) => {
		return generateRule(
			style,
			options,
			[ 'background', 'backgroundPosition' ],
			'backgroundPosition'
		);
	},
};

const backgroundRepeat = {
	name: 'backgroundRepeat',
	generate: ( style: Style, options: StyleOptions ) => {
		return generateRule(
			style,
			options,
			[ 'background', 'backgroundRepeat' ],
			'backgroundRepeat'
		);
	},
};

const backgroundAttachment = {
	name: 'backgroundAttachment',
	generate: ( style: Style, options: StyleOptions ) => {
		return generateRule(
			style,
			options,
			[ 'background', 'backgroundAttachment' ],
			'backgroundAttachment'
		);
	},
};

const backgroundSize = {
	name: 'backgroundSize',
	generate: ( style: Style, options: StyleOptions ) => {
		return generateRule(
			style,
			options,
			[ 'background', 'backgroundSize' ],
			'backgroundSize'
		);
	},
};

export default [
	backgroundImage,
	backgroundAttachment,
	backgroundPosition,
	backgroundRepeat,
	backgroundSize,
];
