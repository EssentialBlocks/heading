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
export const SEPARATOR_SIZE = "separatorSize";

export const UNIT_TYPES = [
	{ label: "px", value: "px" },
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

export const PRESETS = [
	{ label: __("Preset 1"), value: "preset-1" },
	{ label: __("Preset 2"), value: "preset-2" },
	{ label: __("Preset 3"), value: "preset-3" },
	{ label: __("Preset 4"), value: "preset-4" },
];

export const TEXT_ALIGN = [
	{ label: __(<Dashicon icon={"editor-alignleft"} />), value: "left" },
	{ label: __(<Dashicon icon={"editor-aligncenter"} />), value: "center" },
	{ label: __(<Dashicon icon={"editor-alignright"} />), value: "right" }
];

export const CONTENT_POSITION = [
	{ label: __(<Dashicon icon={"editor-alignleft"} />), value: "flex-start" },
	{ label: __(<Dashicon icon={"editor-aligncenter"} />), value: "center" },
	{ label: __(<Dashicon icon={"editor-alignright"} />), value: "flex-end" }
];