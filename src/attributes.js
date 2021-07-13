import {
	WRAPPER_BG,
	WRAPPER_MARGIN,
	WRAPPER_PADDING,
	WRAPPER_BORDER_SHADOW,
	TITLE_MARGIN,
	SUBTITLE_MARGIN,
	SEPARATOR_MARGIN,
	SEPARATOR_SIZE,
} from "./constants/constants";
import {
	generateDimensionsAttributes,
	generateTypographyAttributes,
	generateBackgroundAttributes,
	generateBorderShadowAttributes,
	generateResponsiveRangeAttributes
} from "../util/helpers";
import * as typographyObjs from "./constants/typographyPrefixConstants";

const attributes = {
	resOption: {
		type: "string",
		default: "desktop",
	},

	// blockId attribute for making unique className and other uniqueness
	blockId: {
		type: "string",
	},
	blockRoot: {
		type: "string",
		default: "essential_block",
	},
	blockMeta: {
		source: '',
		type: "object",
	},

	preset: {
		type: "string",
		default: "button-1"
	},
	tagName: {
		type: "string",
		default: "h2"
	},
	content: {
		type: "string",
		default: "Essential Block Heading"
	},
	topSpace: {
		type: "number"
	},
	topSpaceUnit: {
		type: "string",
		default: "px"
	},
	bottomSpace: {
		type: "number"
	},
	bottomSpaceUnit: {
		type: "string",
		default: "px"
	},
	textColor: {
		type: "string"
	},
	fontFamily: {
		type: "string"
	},
	fontWeight: {
		type: "string"
	},
	textTransform: {
		type: "string"
	},
	fontSize: {
		type: "number"
	},
	fontSizeUnit: {
		type: "string",
		default: "px"
	},
	lineHeight: {
		type: "number"
	},
	lineHeightUnit: {
		type: "string",
		default: "px"
	},
	letterSpacing: {
		type: "number"
	},
	letterSpacingUnit: {
		type: "string",
		default: "px"
	},
	align: {
		type: "string",
		default: "left"
	},
	displaySeperator: {
		type: "boolean",
		default: false
	},
	seperatorSize: {
		type: "number"
	},
	seperatorColor: {
		type: "string"
	},
	seperatorStyle: {
		type: "string",
		default: "solid"
	},
	onTop: {
		type: "boolean",
		default: false
	},

	// typography attributes ⬇
	...generateTypographyAttributes(Object.values(typographyObjs)),

	// margin padding attributes ⬇
	...generateDimensionsAttributes(WRAPPER_MARGIN),
	...generateDimensionsAttributes(WRAPPER_PADDING),
	...generateDimensionsAttributes(TITLE_MARGIN, {
		top: 0,
		bottom: 20,
		right: 0,
		left: 0,
		isLinked: false,
	}),
	...generateDimensionsAttributes(SUBTITLE_MARGIN, {
		top: 0,
		bottom: 20,
		right: 0,
		left: 0,
		isLinked: false,
	}),
	...generateDimensionsAttributes(SEPARATOR_MARGIN, {
		top: 0,
		bottom: 20,
		right: 0,
		left: 0,
		isLinked: false,
	}),

	// border shadow attributes ⬇
	...generateBorderShadowAttributes(	WRAPPER_BORDER_SHADOW, 
		{
			bdrDefaults: {
				top: 0,
				bottom: 0,
				right: 0,
				left: 0,
			},
			// noShadow: true,
			// noBorder: true,
		}
	),

	// background attributes ⬇
	...generateBackgroundAttributes(WRAPPER_BG),

	// range controller
	...generateResponsiveRangeAttributes(SEPARATOR_SIZE, {
		defaultRange: 2,
	}),
};

export default attributes;
