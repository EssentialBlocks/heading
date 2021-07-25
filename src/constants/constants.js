const { __ } = wp.i18n;
const {Dashicon} = wp.components;

// the consts defined here should be unique from one another
export const WRAPPER_BG = "wrprBg";
export const WRAPPER_MARGIN = "wrpMargin";
export const WRAPPER_PADDING = "wrpPadding";
export const WRAPPER_BORDER_SHADOW = "wrpBorderShadow";
export const TITLE_MARGIN = "titleMargin";
export const SUBTITLE_MARGIN = "subtitleMargin";
export const SEPARATOR_MARGIN = "separatorMargin";
export const SEPARATOR_LINE_SIZE = "separatorLineSize";
export const SEPARATOR_ICON_SIZE = "separatorIconSize";
export const SEPARATOR_WIDTH = "separatorWidth";

export const UNIT_TYPES = [
	{ label: "px", value: "px" },
	{ label: "em", value: "em" },
];

export const SEPARATOR_UNIT_TYPES = [
	{ label: "px", value: "px" },
	{ label: "%", value: "%" },
	{ label: "em", value: "em" },
];

export const NORMAL_HOVER = [
	{ label: "Normal", value: "normal" },
	{ label: "Hover", value: "hover" },
];

export const SEPARATOR_TYPE = [
	{ label: __("Line"), value: "line" },
	{ label: __("Icon"), value: "icon" },
];

export const SEPARATOR_POSITION = [
	{ label: __("Top"), value: "top" },
	{ label: __("Bottom"), value: "bottom" },
];

export const PRESETS = [
	{ label: __("Select Preset"), value: "preset-0" },
	{ label: __("Preset 1"), value: "preset-1" },
	{ label: __("Preset 2"), value: "preset-2" },
	{ label: __("Preset 3"), value: "preset-3" },
];

export const TEXT_ALIGN = [
	{ label: __(<Dashicon icon={"editor-alignleft"} />), value: "left" },
	{ label: __(<Dashicon icon={"editor-aligncenter"} />), value: "center" },
	{ label: __(<Dashicon icon={"editor-alignright"} />), value: "right" }
];

export const HEADING = [
	{ label: __("H1"), value: "h1" },
	{ label: __("H2"), value: "h2" },
	{ label: __("H3"), value: "h3" },
	{ label: __("H4"), value: "h4" },
	{ label: __("H5"), value: "h5" },
	{ label: __("H6"), value: "h6" },
];

export const SEPERATOR_STYLES = [
	{ label: __("Solid"), value: "solid" },
	{ label: __("Dashed"), value: "dashed" },
	{ label: __("Dotted"), value: "dotted" },
	{ label: __("Double"), value: "double" },
	{ label: __("Groove"), value: "groove" },
	{ label: __("Outset"), value: "outset" },
	{ label: __("Ridge"), value: "ridge" },
];