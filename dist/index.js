/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/attributes.js":
/*!***************************!*\
  !*** ./src/attributes.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants/constants */ "./src/constants/constants.js");
/* harmony import */ var _constants_typographyPrefixConstants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants/typographyPrefixConstants */ "./src/constants/typographyPrefixConstants.js");

const {
  generateDimensionsAttributes,
  generateTypographyAttributes,
  generateBackgroundAttributes,
  generateBorderShadowAttributes,
  generateResponsiveRangeAttributes
} = window.EBAdvHeadingControls;

const attributes = {
  resOption: {
    type: "string",
    default: "Desktop"
  },
  // blockId attribute for making unique className and other uniqueness
  blockId: {
    type: "string"
  },
  blockRoot: {
    type: "string",
    default: "essential_block"
  },
  blockMeta: {
    type: "object"
  },
  preset: {
    type: "string",
    default: "button-1"
  },
  tagName: {
    type: "string",
    default: "h2"
  },
  titleText: {
    type: "string",
    default: "Essential Blocks Advanced Heading"
  },
  subtitleTagName: {
    type: "string",
    default: "p"
  },
  subtitleText: {
    type: "string",
    default: "Essential Blocks Advance Subtitle"
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
  titleColor: {
    type: "string",
    default: "#551ef7"
  },
  titleHoverColor: {
    type: "string"
  },
  subtitleColor: {
    type: "string",
    default: "#555555"
  },
  subtitleHoverColor: {
    type: "string"
  },
  separatorColor: {
    type: "string",
    default: "#551ef7"
  },
  separatorHoverColor: {
    type: "string"
  },
  align: {
    type: "string",
    default: "left"
  },
  displaySubtitle: {
    type: "boolean",
    default: false
  },
  displaySeperator: {
    type: "boolean",
    default: false
  },
  seperatorPosition: {
    type: "string",
    default: "bottom"
  },
  seperatorType: {
    type: "string",
    default: "line"
  },
  seperatorStyle: {
    type: "string",
    default: "solid"
  },
  separatorIcon: {
    type: "string",
    default: "fas fa-arrow-circle-down"
  },
  // typography attributes ⬇
  ...generateTypographyAttributes(Object.values(_constants_typographyPrefixConstants__WEBPACK_IMPORTED_MODULE_1__)),
  // margin padding attributes ⬇
  ...generateDimensionsAttributes(_constants_constants__WEBPACK_IMPORTED_MODULE_0__.WRAPPER_MARGIN),
  ...generateDimensionsAttributes(_constants_constants__WEBPACK_IMPORTED_MODULE_0__.WRAPPER_PADDING),
  ...generateDimensionsAttributes(_constants_constants__WEBPACK_IMPORTED_MODULE_0__.TITLE_MARGIN, {
    top: 0,
    bottom: 15,
    right: 0,
    left: 0,
    isLinked: false
  }),
  ...generateDimensionsAttributes(_constants_constants__WEBPACK_IMPORTED_MODULE_0__.SUBTITLE_MARGIN, {
    top: 0,
    bottom: 20,
    right: 0,
    left: 0,
    isLinked: false
  }),
  ...generateDimensionsAttributes(_constants_constants__WEBPACK_IMPORTED_MODULE_0__.SEPARATOR_MARGIN, {
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    isLinked: false
  }),
  // border shadow attributes ⬇
  ...generateBorderShadowAttributes(_constants_constants__WEBPACK_IMPORTED_MODULE_0__.WRAPPER_BORDER_SHADOW, {
    bdrDefaults: {
      top: 0,
      bottom: 0,
      right: 0,
      left: 0
    }
    // noShadow: true,
    // noBorder: true,
  }),
  // background attributes ⬇
  ...generateBackgroundAttributes(_constants_constants__WEBPACK_IMPORTED_MODULE_0__.WRAPPER_BG, {
    defaultBgGradient: "linear-gradient(45deg,#ffffff,#ffffff)"
  }),
  // range controller Separator Line Border Size
  ...generateResponsiveRangeAttributes(_constants_constants__WEBPACK_IMPORTED_MODULE_0__.SEPARATOR_LINE_SIZE, {
    defaultRange: 4
  }),
  // range controller Separator Icon Size
  ...generateResponsiveRangeAttributes(_constants_constants__WEBPACK_IMPORTED_MODULE_0__.SEPARATOR_ICON_SIZE, {
    defaultRange: 30
  }),
  // range controller Separator Line Width
  ...generateResponsiveRangeAttributes(_constants_constants__WEBPACK_IMPORTED_MODULE_0__.SEPARATOR_WIDTH, {
    defaultRange: 100
  })
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (attributes);

/***/ }),

/***/ "./src/constants/constants.js":
/*!************************************!*\
  !*** ./src/constants/constants.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HEADING: () => (/* binding */ HEADING),
/* harmony export */   NORMAL_HOVER: () => (/* binding */ NORMAL_HOVER),
/* harmony export */   PRESETS: () => (/* binding */ PRESETS),
/* harmony export */   SEPARATOR_ICON_SIZE: () => (/* binding */ SEPARATOR_ICON_SIZE),
/* harmony export */   SEPARATOR_LINE_SIZE: () => (/* binding */ SEPARATOR_LINE_SIZE),
/* harmony export */   SEPARATOR_MARGIN: () => (/* binding */ SEPARATOR_MARGIN),
/* harmony export */   SEPARATOR_POSITION: () => (/* binding */ SEPARATOR_POSITION),
/* harmony export */   SEPARATOR_TYPE: () => (/* binding */ SEPARATOR_TYPE),
/* harmony export */   SEPARATOR_UNIT_TYPES: () => (/* binding */ SEPARATOR_UNIT_TYPES),
/* harmony export */   SEPARATOR_WIDTH: () => (/* binding */ SEPARATOR_WIDTH),
/* harmony export */   SEPERATOR_STYLES: () => (/* binding */ SEPERATOR_STYLES),
/* harmony export */   SUBTITLE_MARGIN: () => (/* binding */ SUBTITLE_MARGIN),
/* harmony export */   TEXT_ALIGN: () => (/* binding */ TEXT_ALIGN),
/* harmony export */   TITLE_MARGIN: () => (/* binding */ TITLE_MARGIN),
/* harmony export */   UNIT_TYPES: () => (/* binding */ UNIT_TYPES),
/* harmony export */   WRAPPER_BG: () => (/* binding */ WRAPPER_BG),
/* harmony export */   WRAPPER_BORDER_SHADOW: () => (/* binding */ WRAPPER_BORDER_SHADOW),
/* harmony export */   WRAPPER_MARGIN: () => (/* binding */ WRAPPER_MARGIN),
/* harmony export */   WRAPPER_PADDING: () => (/* binding */ WRAPPER_PADDING)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);




// the consts defined here should be unique from one another
const WRAPPER_BG = "wrprBg";
const WRAPPER_MARGIN = "wrpMargin";
const WRAPPER_PADDING = "wrpPadding";
const WRAPPER_BORDER_SHADOW = "wrpBorderShadow";
const TITLE_MARGIN = "titleMargin";
const SUBTITLE_MARGIN = "subtitleMargin";
const SEPARATOR_MARGIN = "separatorMargin";
const SEPARATOR_LINE_SIZE = "separatorLineSize";
const SEPARATOR_ICON_SIZE = "separatorIconSize";
const SEPARATOR_WIDTH = "separatorWidth";
const UNIT_TYPES = [{
  label: "px",
  value: "px"
}, {
  label: "em",
  value: "em"
}];
const SEPARATOR_UNIT_TYPES = [{
  label: "px",
  value: "px"
}, {
  label: "%",
  value: "%"
}, {
  label: "em",
  value: "em"
}];
const NORMAL_HOVER = [{
  label: "Normal",
  value: "normal"
}, {
  label: "Hover",
  value: "hover"
}];
const SEPARATOR_TYPE = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Line", "essential-blocks"),
  value: "line"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Icon", "essential-blocks"),
  value: "icon"
}];
const SEPARATOR_POSITION = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Top", "essential-blocks"),
  value: "top"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Bottom", "essential-blocks"),
  value: "bottom"
}];
const PRESETS = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Default", "essential-blocks"),
  value: "preset-0"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Preset 1", "essential-blocks"),
  value: "preset-1"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Preset 2", "essential-blocks"),
  value: "preset-2"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Preset 3", "essential-blocks"),
  value: "preset-3"
}];
const TEXT_ALIGN = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)((0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Dashicon, {
    icon: "editor-alignleft"
  })),
  value: "left"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)((0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Dashicon, {
    icon: "editor-aligncenter"
  })),
  value: "center"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)((0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Dashicon, {
    icon: "editor-alignright"
  })),
  value: "right"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)((0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Dashicon, {
    icon: "menu"
  })),
  value: "justify"
}];
const HEADING = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("H1", "essential-blocks"),
  value: "h1"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("H2", "essential-blocks"),
  value: "h2"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("H3", "essential-blocks"),
  value: "h3"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("H4", "essential-blocks"),
  value: "h4"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("H5", "essential-blocks"),
  value: "h5"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("H6", "essential-blocks"),
  value: "h6"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("P", "essential-blocks"),
  value: "p"
}];
const SEPERATOR_STYLES = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Solid", "essential-blocks"),
  value: "solid"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Dashed", "essential-blocks"),
  value: "dashed"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Dotted", "essential-blocks"),
  value: "dotted"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Double", "essential-blocks"),
  value: "double"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Groove", "essential-blocks"),
  value: "groove"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Outset", "essential-blocks"),
  value: "outset"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Ridge", "essential-blocks"),
  value: "ridge"
}];

/***/ }),

/***/ "./src/constants/typographyPrefixConstants.js":
/*!****************************************************!*\
  !*** ./src/constants/typographyPrefixConstants.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SUBTITLE_TYPOGRAPHY: () => (/* binding */ SUBTITLE_TYPOGRAPHY),
/* harmony export */   TITLE_TYPOGRAPHY: () => (/* binding */ TITLE_TYPOGRAPHY)
/* harmony export */ });
// the consts defined here should be unique from one another
const TITLE_TYPOGRAPHY = "title";
const SUBTITLE_TYPOGRAPHY = "subtitle";

/***/ }),

/***/ "./src/deprecated.js":
/*!***************************!*\
  !*** ./src/deprecated.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _attributes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./attributes */ "./src/attributes.js");

/**
 * WordPress dependencies
 */


const deprecated = [{
  attributes: {
    ..._attributes__WEBPACK_IMPORTED_MODULE_2__["default"],
    titleText: {
      type: "string",
      default: "Essential Block Advanced Heading"
    },
    subtitleText: {
      type: "string",
      default: "Essential Block Advance Subtitle"
    }
  },
  supports: {
    anchor: true
  },
  save: ({
    attributes
  }) => {
    const {
      blockId,
      preset,
      tagName,
      titleText,
      subtitleTagName,
      displaySubtitle,
      subtitleText,
      seperatorType,
      displaySeperator,
      seperatorPosition,
      separatorIcon,
      classHook
    } = attributes;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps.save(), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: `eb-parent-wrapper eb-parent-${blockId} ${classHook}`
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: `eb-advance-heading-wrapper ${blockId} ${preset}`,
      "data-id": blockId
    }, displaySeperator && seperatorPosition === "top" && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "eb-ah-separator " + seperatorType
    }, seperatorType === "icon" && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
      className: `${separatorIcon ? separatorIcon : "fas fa-arrow-circle-down"}`
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
      tagName: tagName,
      className: "eb-ah-title",
      value: titleText
    }), displaySubtitle && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
      tagName: subtitleTagName,
      className: "eb-ah-subtitle",
      value: subtitleText
    }), displaySeperator && seperatorPosition === "bottom" && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "eb-ah-separator " + seperatorType
    }, seperatorType === "icon" && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
      className: `${separatorIcon ? separatorIcon : "fas fa-arrow-circle-down"}`
    })))));
  }
}, {
  attributes: {
    ..._attributes__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  supports: {
    anchor: true
  },
  save: ({
    attributes
  }) => {
    const {
      blockId,
      preset,
      tagName,
      titleText,
      subtitleTagName,
      displaySubtitle,
      subtitleText,
      seperatorType,
      displaySeperator,
      separatorIcon,
      classHook
    } = attributes;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps.save(), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: `eb-parent-wrapper eb-parent-${blockId} ${classHook}`
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: `eb-advance-heading-wrapper ${blockId} ${preset}`,
      "data-id": blockId
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
      tagName: tagName,
      className: "eb-ah-title",
      value: titleText
    }), displaySubtitle && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
      tagName: subtitleTagName,
      className: "eb-ah-subtitle",
      value: subtitleText
    }), displaySeperator && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "eb-ah-separator " + seperatorType
    }, seperatorType === "icon" && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
      className: `${separatorIcon ? separatorIcon : "fas fa-arrow-circle-down"}`
    })))));
  }
}, {
  attributes: {
    ..._attributes__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  supports: {
    anchor: true
  },
  save: ({
    attributes
  }) => {
    const {
      blockId,
      preset,
      tagName,
      titleText,
      displaySubtitle,
      subtitleText,
      seperatorType,
      displaySeperator,
      separatorIcon
    } = attributes;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps.save(), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: `eb-advance-heading-wrapper ${blockId} ${preset}`,
      "data-id": blockId
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
      tagName: tagName,
      className: "eb-ah-title",
      value: titleText
    }), displaySubtitle && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
      tagName: "p",
      className: "eb-ah-subtitle",
      value: subtitleText
    }), displaySeperator && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "eb-ah-separator " + seperatorType
    }, seperatorType === "icon" && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
      className: `${separatorIcon ? separatorIcon : "fas fa-arrow-circle-down"}`
    }))));
  }
}, {
  attributes: {
    ..._attributes__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  save: ({
    attributes
  }) => {
    const {
      blockId,
      preset,
      tagName,
      titleText,
      displaySubtitle,
      subtitleText,
      seperatorType,
      displaySeperator,
      separatorIcon
    } = attributes;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps.save(), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: `eb-advance-heading-wrapper ${blockId} ${preset}`,
      "data-id": blockId
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
      tagName: tagName,
      className: "eb-ah-title",
      value: titleText
    }), displaySubtitle && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
      tagName: "p",
      className: "eb-ah-subtitle",
      value: subtitleText
    }), displaySeperator && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "eb-ah-separator " + seperatorType
    }, seperatorType === "icon" && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
      className: `${separatorIcon ? separatorIcon : "fas fa-arrow-circle-down"}`
    }))));
  }
}];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (deprecated);

/***/ }),

/***/ "./src/edit.js":
/*!*********************!*\
  !*** ./src/edit.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Edit)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _inspector__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./inspector */ "./src/inspector.js");
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./style */ "./src/style.js");

/**
 * WordPress dependencies
 */





/**
 * Internal depencencies
 */



/**
 * External depencencies
 */
const {
  duplicateBlockIdFix,
  DynamicInputValueHandler,
  EBDisplayIcon
} = window.EBAdvHeadingControls;

function Edit(props) {
  const {
    attributes,
    setAttributes,
    className,
    clientId,
    isSelected,
    name
  } = props;
  const {
    resOption,
    blockId,
    blockMeta,
    preset,
    align,
    tagName,
    titleText,
    subtitleTagName,
    subtitleText,
    displaySubtitle,
    displaySeperator,
    seperatorPosition,
    seperatorType,
    separatorIcon,
    classHook
  } = attributes;

  // this useEffect is for creating a unique id for each block's unique className by a random unique number
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const BLOCK_PREFIX = "eb-advance-heading";
    duplicateBlockIdFix({
      BLOCK_PREFIX,
      blockId,
      setAttributes,
      select: _wordpress_data__WEBPACK_IMPORTED_MODULE_3__.select,
      clientId
    });
  }, []);
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps)({
    className: classnames__WEBPACK_IMPORTED_MODULE_4___default()(className, `eb-guten-block-main-parent-wrapper`)
  });
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, isSelected && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.BlockControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.AlignmentToolbar, {
    value: align,
    onChange: align => setAttributes({
      align
    }),
    controls: ["left", "center", "right"]
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_inspector__WEBPACK_IMPORTED_MODULE_5__["default"], {
    attributes: attributes,
    setAttributes: setAttributes
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", blockProps, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_style__WEBPACK_IMPORTED_MODULE_6__["default"], props), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `eb-parent-wrapper eb-parent-${blockId} ${classHook}`
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `eb-advance-heading-wrapper ${blockId} ${preset}`,
    "data-id": blockId
  }, displaySeperator && seperatorPosition === "top" && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "eb-ah-separator " + seperatorType
  }, seperatorType === "icon" &&
  // <i
  //     className={`${separatorIcon
  //         ? separatorIcon
  //         : "fas fa-arrow-circle-down"
  //         }`}
  // ></i>
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(EBDisplayIcon, {
    icon: separatorIcon
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(DynamicInputValueHandler, {
    value: titleText,
    placeholder: 'Add your text here',
    tagName: tagName,
    className: "eb-ah-title",
    allowedFormats: ["core/bold", "core/italic", "core/link", "core/strikethrough", "core/underline", "core/text-color"],
    onChange: titleText => setAttributes({
      titleText
    }),
    readOnly: true
  }), displaySubtitle && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(DynamicInputValueHandler, {
    tagName: subtitleTagName,
    className: "eb-ah-subtitle",
    value: subtitleText,
    allowedFormats: ["core/bold", "core/italic", "core/link", "core/strikethrough", "core/underline", "core/text-color"],
    onChange: subtitleText => setAttributes({
      subtitleText
    }),
    readOnly: true
  }), displaySeperator && seperatorPosition === "bottom" && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "eb-ah-separator " + seperatorType
  }, seperatorType === "icon" &&
  // <i
  //     className={`${separatorIcon
  //         ? separatorIcon
  //         : "fas fa-arrow-circle-down"
  //         }`}
  // ></i>
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(EBDisplayIcon, {
    icon: separatorIcon
  }))))));
}

/***/ }),

/***/ "./src/example.js":
/*!************************!*\
  !*** ./src/example.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const Example = {
  attributes: {
    displaySubtitle: true,
    displaySeperator: true,
    align: "left",
    titleColor: "#551ef7",
    subtitleColor: "#555555",
    separatorColor: "#551ef7",
    seperatorType: "line",
    wrpPaddingisLinked: false,
    wrpPaddingUnit: "px",
    wrpPaddingTop: "0",
    wrpPaddingBottom: "0",
    wrpPaddingLeft: "0",
    wrpPaddingRight: "0",
    wrprBgbackgroundColor: "rgba(255,255,255,1)",
    wrprBgbackgroundType: "classic"
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Example);

/***/ }),

/***/ "./src/icon.js":
/*!*********************!*\
  !*** ./src/icon.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HeadingIcon: () => (/* binding */ HeadingIcon)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

const HeadingIcon = () => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "57",
  height: "56",
  fill: "none",
  viewBox: "0 0 57 56"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  fill: "#6C3BFF",
  d: "M2.829 2.686h31.8c.685 0 1.2-.515 1.2-1.2 0-.686-.515-1.2-1.2-1.2h-31.8C1.2.286 0 1.657 0 3.029v9.685c0 .857.343 1.543.857 2.143.514.514 1.372.857 2.143.857h4.2c1.543 0 2.829-1.371 2.829-2.828v-1.972h12.514v35.143h-9.514c-1.543 0-2.829 1.372-2.829 2.829v4.2c0 1.543 1.371 2.828 2.829 2.828H24.77c.686 0 1.2-.514 1.2-1.2 0-.685-.514-1.2-1.2-1.2H13.03a.369.369 0 01-.343-.343v-4.2c0-.171.171-.342.343-.342h10.714c.686 0 1.2-.515 1.2-1.2V9.543c0-.686-.514-1.2-1.2-1.2H8.57c-.685 0-1.2.514-1.2 1.2v3.171a.369.369 0 01-.342.343h-4.2c-.172 0-.172-.171-.343-.171 0 0-.172-.172-.172-.343V2.857c0 .172.172-.171.515-.171z"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  fill: "#6C3BFF",
  d: "M42 46.143h-9.514V11H45v1.971c0 1.543 1.371 2.829 2.829 2.829h4.2c1.542 0 2.828-1.371 2.828-2.829V3.286c0-1.543-1.371-2.829-2.828-2.829H39.857c-.686 0-1.2.514-1.2 1.2 0 .686.514 1.2 1.2 1.2h12.086c.171 0 .343.172.343.343v9.686a.369.369 0 01-.343.343h-4.2a.369.369 0 01-.343-.343V9.714c0-.685-.514-1.2-1.2-1.2H31.286c-.686 0-1.2.515-1.2 1.2v37.629c0 .686.514 1.2 1.2 1.2H42c.171 0 .343.171.343.343v4.2a.369.369 0 01-.343.343H30c-.686 0-1.2.514-1.2 1.2 0 .685.514 1.2 1.2 1.2h11.743c1.543 0 2.828-1.372 2.828-2.829v-4.2c.258-1.286-1.028-2.657-2.571-2.657z"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  fill: "#6C3BFF",
  d: "M43.543 34.143h.857c.686 0 1.2-.514 1.2-1.2 0-.686-.514-1.2-1.2-1.2h-.857c-.686 0-1.2.514-1.2 1.2 0 .686.514 1.2 1.2 1.2zM55.029 31.743H48c-.686 0-1.2.514-1.2 1.2 0 .686.514 1.2 1.2 1.2h7.029c.685 0 1.2-.514 1.2-1.2 0-.686-.515-1.2-1.2-1.2zM43.543 38.343H54.77c.686 0 1.2-.514 1.2-1.2 0-.686-.514-1.2-1.2-1.2H43.543c-.686 0-1.2.514-1.2 1.2 0 .686.514 1.2 1.2 1.2zM56.229 41.171c0-.685-.515-1.2-1.2-1.2H43.543c-.686 0-1.2.515-1.2 1.2 0 .686.514 1.2 1.2 1.2H54.77c.943.258 1.458-.514 1.458-1.2z"
}));

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit */ "./src/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./save */ "./src/save.js");
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./icon */ "./src/icon.js");
/* harmony import */ var _attributes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./attributes */ "./src/attributes.js");
/* harmony import */ var _deprecated__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./deprecated */ "./src/deprecated.js");
/* harmony import */ var _example__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./example */ "./src/example.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../block.json */ "./block.json");





// import { HeadingIcon } from "../../../util/icons";





const {
  ebConditionalRegisterBlockType
} = EBAdvHeadingControls;
const {
  name,
  category
} = _block_json__WEBPACK_IMPORTED_MODULE_9__;
ebConditionalRegisterBlockType(_block_json__WEBPACK_IMPORTED_MODULE_9__, {
  keywords: [(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("heading", "essential-blocks"), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Advanced Heading", "essential-blocks"), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("heading block", "essential-blocks"), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("heading box", "essential-blocks")],
  icon: _icon__WEBPACK_IMPORTED_MODULE_5__.HeadingIcon,
  attributes: _attributes__WEBPACK_IMPORTED_MODULE_6__["default"],
  edit: _edit__WEBPACK_IMPORTED_MODULE_3__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_4__["default"],
  example: _example__WEBPACK_IMPORTED_MODULE_8__["default"],
  deprecated: _deprecated__WEBPACK_IMPORTED_MODULE_7__["default"],
  transforms: {
    to: [{
      type: 'block',
      blocks: ['essential-blocks/advanced-heading'],
      transform: attributes => {
        console.log('attributes', attributes);
        return (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.createBlock)('essential-blocks/advanced-heading', attributes);
      }
    }]
  }
});

/***/ }),

/***/ "./src/inspector.js":
/*!**************************!*\
  !*** ./src/inspector.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./constants/constants */ "./src/constants/constants.js");
/* harmony import */ var _constants_typographyPrefixConstants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./constants/typographyPrefixConstants */ "./src/constants/typographyPrefixConstants.js");
/* harmony import */ var _attributes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./attributes */ "./src/attributes.js");

/**
 * WordPress dependencies
 */





/**
 * Internal depencencies
 */


const {
  ResponsiveDimensionsControl,
  TypographyDropdown,
  BorderShadowControl,
  ResponsiveRangeController,
  BackgroundControl,
  AdvancedControls,
  DynamicInputControl,
  ColorControl,
  EBIconPicker
} = window.EBAdvHeadingControls;

function Inspector(props) {
  const {
    attributes,
    setAttributes
  } = props;
  const {
    resOption,
    preset,
    align,
    tagName,
    titleText,
    subtitleTagName,
    subtitleText,
    displaySubtitle,
    displaySeperator,
    titleColor,
    titleHoverColor,
    subtitleColor,
    subtitleHoverColor,
    subtitleColorType,
    separatorColor,
    separatorHoverColor,
    separatorColorType,
    seperatorPosition,
    seperatorType,
    seperatorStyle,
    separatorIcon
  } = attributes;
  const resRequiredProps = {
    setAttributes,
    resOption,
    attributes,
    objAttributes: _attributes__WEBPACK_IMPORTED_MODULE_7__["default"]
  };
  const changePreset = selected => {
    setAttributes({
      preset: selected
    });
    switch (selected) {
      case "preset-0":
        setAttributes({
          displaySubtitle: false,
          displaySeperator: false,
          align: "left",
          titleColor: "#551ef7",
          subtitleColor: "#555555",
          separatorColor: "#551ef7",
          seperatorType: "line",
          wrpPaddingisLinked: true,
          wrpPaddingUnit: "px",
          wrpPaddingTop: "0",
          wrpPaddingBottom: "0",
          wrpPaddingLeft: "0",
          wrpPaddingRight: "0",
          wrprBgbackgroundColor: "rgba(255,255,255,1)",
          wrprBgbackgroundType: "classic"
        });
        break;
      case "preset-1":
        setAttributes({
          displaySubtitle: true,
          displaySeperator: true,
          align: "left",
          titleColor: "#551ef7",
          subtitleColor: "#555555",
          separatorColor: "#551ef7",
          seperatorType: "line",
          wrpPaddingisLinked: false,
          wrpPaddingUnit: "px",
          wrpPaddingTop: "0",
          wrpPaddingBottom: "0",
          wrpPaddingLeft: "0",
          wrpPaddingRight: "0",
          wrprBgbackgroundColor: "rgba(255,255,255,1)",
          wrprBgbackgroundType: "classic"
        });
        break;
      case "preset-2":
        setAttributes({
          displaySubtitle: true,
          displaySeperator: true,
          align: "center",
          titleColor: "#551ef7",
          subtitleColor: "#555555",
          separatorColor: "#551ef7",
          seperatorType: "icon",
          separatorIcon: "fas fa-bullhorn",
          wrpPaddingisLinked: false,
          wrpPaddingUnit: "px",
          wrpPaddingTop: "0",
          wrpPaddingBottom: "0",
          wrpPaddingLeft: "0",
          wrpPaddingRight: "0",
          wrprBgbackgroundColor: "rgba(255,255,255,1)",
          wrprBgbackgroundType: "classic"
        });
        break;
      case "preset-3":
        setAttributes({
          displaySubtitle: true,
          displaySeperator: true,
          align: "center",
          titleColor: "#551ef7",
          subtitleColor: "#9b51e0",
          separatorColor: "#551ef7",
          seperatorType: "icon",
          separatorIcon: "fas fa-exchange-alt",
          wrpPaddingisLinked: false,
          wrpPaddingUnit: "px",
          wrpPaddingTop: "30",
          wrpPaddingBottom: "30",
          wrpPaddingLeft: "15",
          wrpPaddingRight: "15",
          wrprBgbackgroundColor: "rgba(206,190,255,1)",
          wrprBgbackgroundType: "classic"
        });
        break;
      default:
        return false;
    }
  };
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InspectorControls, {
    key: "controls"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "eb-panel-control"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TabPanel, {
    className: "eb-parent-tab-panel",
    activeClass: "active-tab"
    // onSelect={onSelect}
    ,
    tabs: [{
      name: "general",
      title: "General",
      className: "eb-tab general"
    }, {
      name: "styles",
      title: "Style",
      className: "eb-tab styles"
    }, {
      name: "advance",
      title: "Advanced",
      className: "eb-tab advance"
    }]
  }, tab => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "eb-tab-controls" + tab.name
  }, tab.name === "general" && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("General", "essential-blocks"),
    initialOpen: true
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Preset Designs", "essential-blocks"),
    value: preset,
    options: (0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_4__.applyFilters)("eb_advanced_heading_preset", _constants_constants__WEBPACK_IMPORTED_MODULE_5__.PRESETS),
    onChange: selected => changePreset(selected)
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.BaseControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Alignment", "essential-blocks"),
    id: "eb-advance-heading-alignment"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ButtonGroup, {
    id: "eb-advance-heading-alignment"
  }, _constants_constants__WEBPACK_IMPORTED_MODULE_5__.TEXT_ALIGN.map((item, key) => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
    key: key
    // isLarge
    ,
    isPrimary: align === item.value,
    isSecondary: align !== item.value,
    onClick: () => setAttributes({
      align: item.value
    })
  }, item.label)))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.BaseControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Title Level", "essential-blocks"),
    id: "eb-advance-heading-alignment"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ButtonGroup, {
    className: "eb-advance-heading-alignment eb-html-tag-buttongroup"
  }, _constants_constants__WEBPACK_IMPORTED_MODULE_5__.HEADING.map((item, key) => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
    key: key
    // isLarge
    ,
    isPrimary: tagName === item.value,
    isSecondary: tagName !== item.value,
    onClick: () => setAttributes({
      tagName: item.value
    })
  }, item.label)))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(DynamicInputControl, {
    label: "Title Text",
    attrName: "titleText",
    inputValue: titleText,
    setAttributes: setAttributes,
    onChange: text => setAttributes({
      titleText: text
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Display Subtilte", "essential-blocks"),
    checked: displaySubtitle,
    onChange: () => setAttributes({
      displaySubtitle: !displaySubtitle
    })
  }), displaySubtitle && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.BaseControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Subtitle Level", "essential-blocks"),
    id: "eb-advance-heading-alignment"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ButtonGroup, {
    className: "eb-advance-heading-alignment eb-html-tag-buttongroup"
  }, _constants_constants__WEBPACK_IMPORTED_MODULE_5__.HEADING.map((item, key) => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
    key: key
    // isLarge
    ,
    isPrimary: subtitleTagName === item.value,
    isSecondary: subtitleTagName !== item.value,
    onClick: () => setAttributes({
      subtitleTagName: item.value
    })
  }, item.label)))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(DynamicInputControl, {
    label: "Subtitle Text",
    attrName: "subtitleText",
    inputValue: subtitleText,
    setAttributes: setAttributes,
    onChange: text => setAttributes({
      subtitleText: text
    })
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Display Separator", "essential-blocks"),
    checked: displaySeperator,
    onChange: () => setAttributes({
      displaySeperator: !displaySeperator
    })
  }))), tab.name === "styles" && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Title", "essential-blocks"),
    initialOpen: true
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(TypographyDropdown, {
    baseLabel: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Typography", "essential-blocks"),
    typographyPrefixConstant: _constants_typographyPrefixConstants__WEBPACK_IMPORTED_MODULE_6__.TITLE_TYPOGRAPHY,
    resRequiredProps: resRequiredProps
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ColorControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Title Color", "essential-blocks"),
    color: titleColor,
    onChange: color => setAttributes({
      titleColor: color
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ColorControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Title Hover Color", "essential-blocks"),
    color: titleHoverColor,
    onChange: color => setAttributes({
      titleHoverColor: color
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ResponsiveDimensionsControl, {
    resRequiredProps: resRequiredProps,
    controlName: _constants_constants__WEBPACK_IMPORTED_MODULE_5__.TITLE_MARGIN,
    baseLabel: "Margin"
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Subtitle", "essential-blocks"),
    initialOpen: false
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(TypographyDropdown, {
    baseLabel: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Typography", "essential-blocks"),
    typographyPrefixConstant: _constants_typographyPrefixConstants__WEBPACK_IMPORTED_MODULE_6__.SUBTITLE_TYPOGRAPHY,
    resRequiredProps: resRequiredProps
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ColorControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Subtitle Color", "essential-blocks"),
    color: subtitleColor,
    onChange: color => setAttributes({
      subtitleColor: color
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ColorControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Subtitle Hover Color", "essential-blocks"),
    color: subtitleHoverColor,
    onChange: color => setAttributes({
      subtitleHoverColor: color
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ResponsiveDimensionsControl, {
    resRequiredProps: resRequiredProps,
    controlName: _constants_constants__WEBPACK_IMPORTED_MODULE_5__.SUBTITLE_MARGIN,
    baseLabel: "Margin"
  })), displaySeperator && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Separator", "essential-blocks"),
    initialOpen: false
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Separator Position", "essential-blocks"),
    value: seperatorPosition,
    options: _constants_constants__WEBPACK_IMPORTED_MODULE_5__.SEPARATOR_POSITION,
    onChange: seperatorPosition => setAttributes({
      seperatorPosition
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.BaseControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Separator Type", "essential-blocks"),
    id: "eb-advance-heading-alignment"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ButtonGroup, {
    id: "eb-advance-heading-alignment"
  }, _constants_constants__WEBPACK_IMPORTED_MODULE_5__.SEPARATOR_TYPE.map((item, key) => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
    key: key
    // isLarge
    ,
    isPrimary: seperatorType === item.value,
    isSecondary: seperatorType !== item.value,
    onClick: () => setAttributes({
      seperatorType: item.value
    })
  }, item.label)))), seperatorType === "line" && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Separator Style", "essential-blocks"),
    value: seperatorStyle,
    options: _constants_constants__WEBPACK_IMPORTED_MODULE_5__.SEPERATOR_STYLES,
    onChange: seperatorStyle => setAttributes({
      seperatorStyle
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ResponsiveRangeController, {
    baseLabel: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Separator Height", "essential-blocks"),
    controlName: _constants_constants__WEBPACK_IMPORTED_MODULE_5__.SEPARATOR_LINE_SIZE,
    resRequiredProps: resRequiredProps,
    units: _constants_constants__WEBPACK_IMPORTED_MODULE_5__.UNIT_TYPES,
    min: 0,
    max: 100,
    step: 1
  })), seperatorType === "icon" && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(EBIconPicker, {
    value: separatorIcon,
    onChange: icon => setAttributes({
      separatorIcon: icon
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ResponsiveRangeController, {
    baseLabel: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Icon Size", "essential-blocks"),
    controlName: _constants_constants__WEBPACK_IMPORTED_MODULE_5__.SEPARATOR_ICON_SIZE,
    resRequiredProps: resRequiredProps,
    units: _constants_constants__WEBPACK_IMPORTED_MODULE_5__.UNIT_TYPES,
    min: 0,
    max: 100,
    step: 1
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ResponsiveRangeController, {
    baseLabel: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Separator Width", "essential-blocks"),
    controlName: _constants_constants__WEBPACK_IMPORTED_MODULE_5__.SEPARATOR_WIDTH,
    resRequiredProps: resRequiredProps,
    units: _constants_constants__WEBPACK_IMPORTED_MODULE_5__.SEPARATOR_UNIT_TYPES,
    min: 0,
    max: 300,
    step: 1
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ColorControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Separator Color", "essential-blocks"),
    color: separatorColor,
    onChange: color => setAttributes({
      separatorColor: color
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ColorControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Separator Hover Color", "essential-blocks"),
    color: separatorHoverColor,
    onChange: color => setAttributes({
      separatorHoverColor: color
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ResponsiveDimensionsControl, {
    resRequiredProps: resRequiredProps,
    controlName: _constants_constants__WEBPACK_IMPORTED_MODULE_5__.SEPARATOR_MARGIN,
    baseLabel: "Margin"
  }))), tab.name === "advance" && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ResponsiveDimensionsControl, {
    resRequiredProps: resRequiredProps,
    controlName: _constants_constants__WEBPACK_IMPORTED_MODULE_5__.WRAPPER_MARGIN,
    baseLabel: "Margin"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ResponsiveDimensionsControl, {
    resRequiredProps: resRequiredProps,
    controlName: _constants_constants__WEBPACK_IMPORTED_MODULE_5__.WRAPPER_PADDING,
    baseLabel: "Padding"
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Background", "essential-blocks"),
    initialOpen: false
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(BackgroundControl, {
    controlName: _constants_constants__WEBPACK_IMPORTED_MODULE_5__.WRAPPER_BG,
    resRequiredProps: resRequiredProps
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Border & Shadow"),
    initialOpen: false
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(BorderShadowControl, {
    controlName: _constants_constants__WEBPACK_IMPORTED_MODULE_5__.WRAPPER_BORDER_SHADOW,
    resRequiredProps: resRequiredProps
    // noShadow
    // noBorder
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(AdvancedControls, {
    attributes: attributes,
    setAttributes: setAttributes
  }))))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Inspector);

/***/ }),

/***/ "./src/save.js":
/*!*********************!*\
  !*** ./src/save.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);


const {
  EBDisplayIcon
} = window.EBAdvHeadingControls;
const Save = ({
  attributes
}) => {
  const {
    blockId,
    preset,
    tagName,
    titleText,
    subtitleTagName,
    displaySubtitle,
    subtitleText,
    seperatorType,
    displaySeperator,
    seperatorPosition,
    separatorIcon,
    classHook
  } = attributes;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps.save(), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `eb-parent-wrapper eb-parent-${blockId} ${classHook}`
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `eb-advance-heading-wrapper ${blockId} ${preset}`,
    "data-id": blockId
  }, displaySeperator && seperatorPosition === "top" && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "eb-ah-separator " + seperatorType
  }, seperatorType === "icon" &&
  // <i
  //     className={`${separatorIcon
  //         ? separatorIcon
  //         : "fas fa-arrow-circle-down"
  //         }`}
  // ></i>
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(EBDisplayIcon, {
    icon: separatorIcon
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
    tagName: tagName,
    className: "eb-ah-title",
    value: titleText
  }), displaySubtitle && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
    tagName: subtitleTagName,
    className: "eb-ah-subtitle",
    value: subtitleText
  }), displaySeperator && seperatorPosition === "bottom" && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "eb-ah-separator " + seperatorType
  }, seperatorType === "icon" &&
  // <i
  //     className={`${separatorIcon
  //         ? separatorIcon
  //         : "fas fa-arrow-circle-down"
  //         }`}
  // ></i>
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(EBDisplayIcon, {
    icon: separatorIcon
  })))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Save);

/***/ }),

/***/ "./src/style.js":
/*!**********************!*\
  !*** ./src/style.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Style)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants/constants */ "./src/constants/constants.js");
/* harmony import */ var _constants_typographyPrefixConstants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants/typographyPrefixConstants */ "./src/constants/typographyPrefixConstants.js");




/**
 * External depencencies
 */
const {
  softMinifyCssStrings,
  generateTypographyStyles,
  generateDimensionsControlStyles,
  generateBorderShadowStyles,
  generateResponsiveRangeStyles,
  generateBackgroundControlStyles,
  StyleComponent
} = window.EBAdvHeadingControls;
function Style(props) {
  const {
    attributes,
    setAttributes,
    name
  } = props;
  const {
    resOption,
    blockId,
    blockMeta,
    preset,
    align,
    tagName,
    titleText,
    subtitleTagName,
    subtitleText,
    displaySubtitle,
    displaySeperator,
    titleColor,
    titleHoverColor,
    subtitleColor,
    subtitleHoverColor,
    separatorColor,
    separatorHoverColor,
    seperatorPosition,
    seperatorType,
    seperatorStyle,
    separatorIcon,
    classHook,
    blockRoot
  } = attributes;

  // CSS/styling Codes Starts from Here
  const {
    typoStylesDesktop: titleTypographyDesktop,
    typoStylesTab: titleTypographyTab,
    typoStylesMobile: titleTypographyMobile
  } = generateTypographyStyles({
    attributes,
    prefixConstant: _constants_typographyPrefixConstants__WEBPACK_IMPORTED_MODULE_2__.TITLE_TYPOGRAPHY
  });
  const {
    typoStylesDesktop: subtitleTypographyDesktop,
    typoStylesTab: subtitleTypographyTab,
    typoStylesMobile: subtitleTypographyMobile
  } = generateTypographyStyles({
    attributes,
    prefixConstant: _constants_typographyPrefixConstants__WEBPACK_IMPORTED_MODULE_2__.SUBTITLE_TYPOGRAPHY
  });

  /* Wrapper Margin */
  const {
    dimensionStylesDesktop: wrapperMarginDesktop,
    dimensionStylesTab: wrapperMarginTab,
    dimensionStylesMobile: wrapperMarginMobile
  } = generateDimensionsControlStyles({
    controlName: _constants_constants__WEBPACK_IMPORTED_MODULE_1__.WRAPPER_MARGIN,
    styleFor: "margin",
    attributes
  });

  /* Wrapper Padding */
  const {
    dimensionStylesDesktop: wrapperPaddingDesktop,
    dimensionStylesTab: wrapperPaddingTab,
    dimensionStylesMobile: wrapperPaddingMobile
  } = generateDimensionsControlStyles({
    controlName: _constants_constants__WEBPACK_IMPORTED_MODULE_1__.WRAPPER_PADDING,
    styleFor: "padding",
    attributes
  });

  /* Title Margin */
  const {
    dimensionStylesDesktop: titleMarginDesktop,
    dimensionStylesTab: titleMarginTab,
    dimensionStylesMobile: titleMarginMobile
  } = generateDimensionsControlStyles({
    controlName: _constants_constants__WEBPACK_IMPORTED_MODULE_1__.TITLE_MARGIN,
    styleFor: "margin",
    attributes
  });

  /* Subtitle Margin */
  const {
    dimensionStylesDesktop: subtitleMarginDesktop,
    dimensionStylesTab: subtitleMarginTab,
    dimensionStylesMobile: subtitleMarginMobile
  } = generateDimensionsControlStyles({
    controlName: _constants_constants__WEBPACK_IMPORTED_MODULE_1__.SUBTITLE_MARGIN,
    styleFor: "margin",
    attributes
  });

  /* Separator Margin */
  const {
    dimensionStylesDesktop: separatorMarginDesktop,
    dimensionStylesTab: separatorMarginTab,
    dimensionStylesMobile: separatorMarginMobile
  } = generateDimensionsControlStyles({
    controlName: _constants_constants__WEBPACK_IMPORTED_MODULE_1__.SEPARATOR_MARGIN,
    styleFor: "margin",
    attributes
  });
  const {
    styesDesktop: wrapperBDShadowDesktop,
    styesTab: wrapperBDShadowTab,
    styesMobile: wrapperBDShadowMobile,
    stylesHoverDesktop: wrapperBDShadowHoverDesktop,
    stylesHoverTab: wrapperBDShadowHoverTab,
    stylesHoverMobile: wrapperBDShadowHoverMobile,
    transitionStyle: wrapperBDShadowTransition
  } = generateBorderShadowStyles({
    controlName: _constants_constants__WEBPACK_IMPORTED_MODULE_1__.WRAPPER_BORDER_SHADOW,
    attributes
  });

  // responsive range controller Separator Line Border Size
  const {
    rangeStylesDesktop: separatorLineSizeDesktop,
    rangeStylesTab: separatorLineSizeTab,
    rangeStylesMobile: separatorLineSizeMobile
  } = generateResponsiveRangeStyles({
    controlName: _constants_constants__WEBPACK_IMPORTED_MODULE_1__.SEPARATOR_LINE_SIZE,
    property: "border-width",
    attributes
  });

  // responsive range controller Separator Icon Size
  const {
    rangeStylesDesktop: separatorIconSizeDesktop,
    rangeStylesTab: separatorIconSizeTab,
    rangeStylesMobile: separatorIconSizeMobile
  } = generateResponsiveRangeStyles({
    controlName: _constants_constants__WEBPACK_IMPORTED_MODULE_1__.SEPARATOR_ICON_SIZE,
    property: "font-size",
    attributes
  });

  // responsive range controller Separator Width
  const {
    rangeStylesDesktop: separatorLineWidthDesktop,
    rangeStylesTab: separatorLineWidthTab,
    rangeStylesMobile: separatorLineWidthMobile
  } = generateResponsiveRangeStyles({
    controlName: _constants_constants__WEBPACK_IMPORTED_MODULE_1__.SEPARATOR_WIDTH,
    property: "width",
    attributes
  });

  //Generate Background
  const {
    backgroundStylesDesktop: wrapperBackgroundStylesDesktop,
    hoverBackgroundStylesDesktop: wrapperHoverBackgroundStylesDesktop,
    backgroundStylesTab: wrapperBackgroundStylesTab,
    hoverBackgroundStylesTab: wrapperHoverBackgroundStylesTab,
    backgroundStylesMobile: wrapperBackgroundStylesMobile,
    hoverBackgroundStylesMobile: wrapperHoverBackgroundStylesMobile,
    overlayStylesDesktop: wrapperOverlayStylesDesktop,
    hoverOverlayStylesDesktop: wrapperHoverOverlayStylesDesktop,
    overlayStylesTab: wrapperOverlayStylesTab,
    hoverOverlayStylesTab: wrapperHoverOverlayStylesTab,
    overlayStylesMobile: wrapperOverlayStylesMobile,
    hoverOverlayStylesMobile: wrapperHoverOverlayStylesMobile,
    bgTransitionStyle: wrapperBgTransitionStyle,
    ovlTransitionStyle: wrapperOvlTransitionStyle
  } = generateBackgroundControlStyles({
    attributes,
    controlName: _constants_constants__WEBPACK_IMPORTED_MODULE_1__.WRAPPER_BG
  });

  // wrapper styles css in strings ⬇
  const wrapperStylesDesktop = `
		.eb-advance-heading-wrapper.${blockId}{
			position: relative;
			text-align: ${align};
			${wrapperMarginDesktop}
			${wrapperPaddingDesktop}
			${wrapperBDShadowDesktop}
			${wrapperBackgroundStylesDesktop}
			transition:${wrapperBgTransitionStyle}, ${wrapperBDShadowTransition};
		}

		.eb-advance-heading-wrapper.${blockId}:hover {
			${wrapperBDShadowHoverDesktop}
			${wrapperHoverBackgroundStylesDesktop}
		}

		.eb-advance-heading-wrapper.${blockId}:before{
			${wrapperOverlayStylesDesktop}
			transition:${wrapperOvlTransitionStyle};
		}

		.eb-advance-heading-wrapper.${blockId}:hover:before{
			${wrapperHoverOverlayStylesDesktop}
		}
	`;
  const wrapperStylesTab = `
		.eb-advance-heading-wrapper.${blockId}{
			${wrapperMarginTab}
			${wrapperPaddingTab}
			${wrapperBDShadowTab}
			${wrapperBackgroundStylesTab}
		}
		.eb-advance-heading-wrapper.${blockId}:hover {
			${wrapperBDShadowHoverTab}
			${wrapperHoverBackgroundStylesTab}
		}

		.eb-advance-heading-wrapper.${blockId}:before{
			${wrapperOverlayStylesTab}
		}

		.eb-advance-heading-wrapper.${blockId}:hover:before{
			${wrapperHoverOverlayStylesTab}
		}
	`;
  const wrapperStylesMobile = `
		.eb-advance-heading-wrapper.${blockId}{
			${wrapperMarginMobile}
			${wrapperPaddingMobile}
			${wrapperBDShadowMobile}
			${wrapperBackgroundStylesMobile}
		}
		.eb-advance-heading-wrapper.${blockId}:hover {
			${wrapperBDShadowHoverMobile}
			${wrapperHoverBackgroundStylesMobile}
		}

		.eb-advance-heading-wrapper.${blockId}:before{
			${wrapperOverlayStylesMobile}
		}

		.eb-advance-heading-wrapper.${blockId}:hover:before{
			${wrapperHoverOverlayStylesMobile}
		}
	`;

  // Title styles css in strings ⬇
  const titleStylesDesktop = `
		.eb-advance-heading-wrapper.${blockId} .eb-ah-title {
			text-align: ${align};
			color: ${titleColor};
			${titleTypographyDesktop}
			${titleMarginDesktop}
		}
		.eb-advance-heading-wrapper.${blockId}:hover .eb-ah-title {
			color: ${titleHoverColor};
		}
	`;
  const titleStylesTab = `
		.eb-advance-heading-wrapper.${blockId} .eb-ah-title {
			${titleTypographyTab}
			${titleMarginTab}
		}
	`;
  const titleStylesMobile = `
		.eb-advance-heading-wrapper.${blockId} .eb-ah-title {
			${titleTypographyMobile}
			${titleMarginMobile}
		}
	`;

  // Sub Title styles css in strings ⬇
  const subtitleStylesDesktop = `
		.eb-advance-heading-wrapper.${blockId} .eb-ah-subtitle {
			text-align: ${align};
			color: ${subtitleColor};
			${subtitleTypographyDesktop}
			${subtitleMarginDesktop}
		}
		.eb-advance-heading-wrapper.${blockId}:hover .eb-ah-subtitle {
			color: ${subtitleHoverColor};
		}
	`;
  const subtitleStylesTab = `
		.eb-advance-heading-wrapper.${blockId} .eb-ah-subtitle {
			${subtitleTypographyTab}
			${subtitleMarginTab}
		}
	`;
  const subtitleStylesMobile = `
		.eb-advance-heading-wrapper.${blockId} .eb-ah-subtitle {
			${subtitleTypographyMobile}
			${subtitleMarginMobile}
		}
	`;

  // Separator styles css in strings ⬇
  const separatorStylesDesktop = `
		.eb-advance-heading-wrapper.${blockId} .eb-ah-separator {
			color: ${subtitleColor};
			${separatorMarginDesktop}
		}
		.eb-advance-heading-wrapper.${blockId} .eb-ah-separator.line {
			border-style: none none ${seperatorStyle};
			border-color: ${separatorColor};
			${separatorLineSizeDesktop}
			${separatorLineWidthDesktop}
			${align === "center" ? "margin-left: auto; margin-right: auto" : ""}
			${align === "right" ? "margin-left: auto; margin-right: 0" : ""}
		}
		.eb-advance-heading-wrapper.${blockId}:hover .eb-ah-separator.line {
			border-color: ${separatorHoverColor};
		}
		.eb-advance-heading-wrapper.${blockId} .eb-ah-separator.icon {
			text-align: ${align};
			color: ${separatorColor};
			${separatorIconSizeDesktop}
		}
		.eb-advance-heading-wrapper.${blockId}:hover .eb-ah-separator.icon {
			color: ${separatorHoverColor};
		}
	`;
  const separatorStylesTab = `
		.eb-advance-heading-wrapper.${blockId} .eb-ah-separator {
			${separatorMarginTab}
		}
		.eb-advance-heading-wrapper.${blockId} .eb-ah-separator.line {
			${separatorLineSizeTab}
			${separatorLineWidthTab}
		}
		.eb-advance-heading-wrapper.${blockId} .eb-ah-separator.icon {
			${separatorIconSizeTab}
		}
	`;
  const separatorStylesMobile = `
	.eb-advance-heading-wrapper.${blockId} .eb-ah-separator {
			${separatorMarginMobile}
		}
		.eb-advance-heading-wrapper.${blockId} .eb-ah-separator.line {
			${separatorLineSizeMobile}
			${separatorLineWidthMobile}
		}
		.eb-advance-heading-wrapper.${blockId} .eb-ah-separator.icon {
			${separatorIconSizeMobile}
		}
	`;

  // all css styles for large screen width (desktop/laptop) in strings ⬇
  const desktopAllStyles = softMinifyCssStrings(`
			${wrapperStylesDesktop}
			${titleStylesDesktop}
			${subtitleStylesDesktop}
			${separatorStylesDesktop}
		`);

  // all css styles for Tab in strings ⬇
  const tabAllStyles = softMinifyCssStrings(`
			${wrapperStylesTab}
			${titleStylesTab}
			${subtitleStylesTab}
			${separatorStylesTab}
		`);

  // all css styles for Mobile in strings ⬇
  const mobileAllStyles = softMinifyCssStrings(`
			${wrapperStylesMobile}
			${titleStylesMobile}
			${subtitleStylesMobile}
			${separatorStylesMobile}
		`);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(StyleComponent, {
    attributes: attributes,
    setAttributes: setAttributes,
    desktopAllStyles: desktopAllStyles,
    tabAllStyles: tabAllStyles,
    mobileAllStyles: mobileAllStyles,
    blockName: name
  }));
}

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["data"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/hooks":
/*!*******************************!*\
  !*** external ["wp","hooks"] ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["hooks"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "./node_modules/classnames/index.js":
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
/***/ ((module, exports) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = '';

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (arg) {
				classes = appendClass(classes, parseValue(arg));
			}
		}

		return classes;
	}

	function parseValue (arg) {
		if (typeof arg === 'string' || typeof arg === 'number') {
			return arg;
		}

		if (typeof arg !== 'object') {
			return '';
		}

		if (Array.isArray(arg)) {
			return classNames.apply(null, arg);
		}

		if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes('[native code]')) {
			return arg.toString();
		}

		var classes = '';

		for (var key in arg) {
			if (hasOwn.call(arg, key) && arg[key]) {
				classes = appendClass(classes, key);
			}
		}

		return classes;
	}

	function appendClass (value, newClass) {
		if (!newClass) {
			return value;
		}
	
		if (value) {
			return value + ' ' + newClass;
		}
	
		return value + newClass;
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),

/***/ "./block.json":
/*!********************!*\
  !*** ./block.json ***!
  \********************/
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"apiVersion":"2","name":"advanced-heading/advanced-heading","title":"Advanced Heading","category":"widgets","description":"Create Advanced Heading with Title, Subtitle and Separator Controls","textdomain":"advanced-heading"}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"dist": 0,
/******/ 			"style-dist": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = globalThis["webpackChunkadvance_heading"] = globalThis["webpackChunkadvance_heading"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["style-dist"], () => (__webpack_require__("./src/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map