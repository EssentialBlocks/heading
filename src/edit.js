/**
 * WordPress dependencies
*/
const { __ } = wp.i18n;
const { BlockControls, AlignmentToolbar, RichText, useBlockProps } = wp.blockEditor;
const { useEffect } = wp.element;
const { select } = wp.data;

/**
  * Internal depencencies
*/
import Inspector from "./inspector";
import "./editor.scss";
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
import { TITLE_TYPOGRAPHY, SUBTITLE_TYPOGRAPHY } from "./constants/typographyPrefixConstants";
import {
	softMinifyCssStrings,
	isCssExists,
	generateTypographyStyles,
	generateDimensionsControlStyles,
	generateBorderShadowStyles,
	generateResponsiveRangeStyles,
	mimmikCssForPreviewBtnClick,
	duplicateBlockIdFix,
} from "../util/helpers";

export default function Edit(props) {
	const { attributes, setAttributes, clientId, isSelected } = props;
	const {
		blockId,
		blockMeta,
		// responsive control attribute ⬇
		resOption,
		preset,
		align,
		tagName,
		titleText,
	} = attributes;

	// this useEffect is for setting the resOption attribute to desktop/tab/mobile depending on the added 'eb-res-option-' class
	useEffect(() => {
		const bodyClasses = document.body.className;

		setAttributes({
			resOption: select("core/edit-post").__experimentalGetPreviewDeviceType(),
		});

	}, []);	

	// this useEffect is for creating a unique id for each block's unique className by a random unique number
	useEffect(() => {
		const BLOCK_PREFIX = "eb-advance-heading";
		duplicateBlockIdFix({
			BLOCK_PREFIX,
			blockId,
			setAttributes,
			select,
			clientId,
		});
	}, []);

	// this useEffect is for mimmiking css when responsive options clicked from wordpress's 'preview' button
	useEffect(() => {
		mimmikCssForPreviewBtnClick({
			domObj: document,
			select,
		});
	}, []);

	const blockProps = useBlockProps({
		className: `eb-guten-block-main-parent-wrapper`,
	});

	//
	// CSS/styling Codes Starts from Here

	const {
		typoStylesDesktop: titleTypographyDesktop,
		typoStylesTab: titleTypographyTab,
		typoStylesMobile: titleTypographyMobile,
	} = generateTypographyStyles({
		attributes,
		prefixConstant: TITLE_TYPOGRAPHY,
		defaultFontSize: 24,
	});

	const {
		typoStylesDesktop: subtitleTypographyDesktop,
		typoStylesTab: subtitleTypographyTab,
		typoStylesMobile: subtitleTypographyMobile,
	} = generateTypographyStyles({
		attributes,
		prefixConstant: SUBTITLE_TYPOGRAPHY
	});

	/* Wrapper Margin */
	const {
		dimensionStylesDesktop: wrapperMarginDesktop,
		dimensionStylesTab: wrapperMarginTab,
		dimensionStylesMobile: wrapperMarginMobile,
	} = generateDimensionsControlStyles({
		controlName: WRAPPER_MARGIN,
		styleFor: "margin",
		attributes,
	});

	/* Wrapper Padding */
	const {
		dimensionStylesDesktop: wrapperPaddingDesktop,
		dimensionStylesTab: wrapperPaddingTab,
		dimensionStylesMobile: wrapperPaddingMobile,
	} = generateDimensionsControlStyles({
		controlName: WRAPPER_PADDING,
		styleFor: "padding",
		attributes,
	});

	/* Title Margin */
	const {
		dimensionStylesDesktop: titleMarginDesktop,
		dimensionStylesTab: titleMarginTab,
		dimensionStylesMobile: titleMarginMobile,
	} = generateDimensionsControlStyles({
		controlName: TITLE_MARGIN,
		styleFor: "margin",
		attributes,
	});

	/* Subtitle Margin */
	const {
		dimensionStylesDesktop: subtitleMarginDesktop,
		dimensionStylesTab: subtitleMarginTab,
		dimensionStylesMobile: subtitleMarginMobile,
	} = generateDimensionsControlStyles({
		controlName: SUBTITLE_MARGIN,
		styleFor: "margin",
		attributes,
	});

	/* Separator Margin */
	const {
		dimensionStylesDesktop: separatorMarginDesktop,
		dimensionStylesTab: separatorMarginTab,
		dimensionStylesMobile: separatorMarginMobile,
	} = generateDimensionsControlStyles({
		controlName: SEPARATOR_MARGIN,
		styleFor: "margin",
		attributes,
	});

	const {
		styesDesktop: wrapperBDShadowDesktop,
		styesTab: wrapperBDShadowTab,
		styesMobile: wrapperBDShadowMobile,
		stylesHoverDesktop: wrapperBDShadowHoverDesktop,
		stylesHoverTab: wrapperBDShadowHoverTab,
		stylesHoverMobile: wrapperBDShadowHoverMobile,
	} = generateBorderShadowStyles({
		controlName: WRAPPER_BORDER_SHADOW,
		attributes,
	});

	// responsive range controller
	const {
		rangeStylesDesktop: separatorSizeDesktop,
		rangeStylesTab: separatorSizeTab,
		rangeStylesMobile: separatorSizeMobile,
	} = generateResponsiveRangeStyles({
		controlName: SEPARATOR_SIZE,
		property: "height",
		attributes,
	});

	// // wrapper styles css in strings ⬇
	// const wrapperStylesDesktop = `
	// 	.eb-advance-heading-wrapper.${blockId}{
	// 		display: flex;
	// 		flex-direction: row;
	// 		align-items: ${contentPosition};
	// 		justify-content: ${contentPosition};
	// 		position: relative;
	// 		${wrapperMarginDesktop}
	// 	}
	// `;
	// const wrapperStylesTab = `
	// 	.eb-advance-heading-wrapper.${blockId}{
	// 		${wrapperMarginTab}

	// 	}
	// `;
	// const wrapperStylesMobile = `
	// 	.eb-advance-heading-wrapper.${blockId}{
	// 		${wrapperMarginMobile}

	// 	}
	// `;

	// // Buttons Common styles css in strings ⬇
	// const buttonsCommonStyleDesktop = `
	// 	.eb-advance-heading-wrapper.${blockId} .eb-button-parent {
	// 		${wrapperPaddingDesktop}
	// 		${separatorSizeDesktop}
	// 		${buttonGapDesktop}
	// 		text-align: ${buttonTextAlign};
	// 		cursor: pointer;
	// 	}
	// 	.eb-advance-heading-wrapper.${blockId} .eb-button-parent .eb-button-text {
	// 		${titleTypographyDesktop}
	// 	}
	// `;

	// const buttonsCommonStyleTab = `
	// 	.eb-advance-heading-wrapper.${blockId} .eb-button-parent {
	// 		${wrapperPaddingTab}
	// 		${separatorSizeTab}
	// 		${buttonGapTab}
	// 	}
	// 	.eb-advance-heading-wrapper.${blockId} .eb-button-parent .eb-button-text {
	// 		${titleTypographyTab}
	// 	}
	// `;

	// const buttonsCommonStyleMobile = `
	// 	.eb-advance-heading-wrapper.${blockId} .eb-button-parent {
	// 		${wrapperPaddingMobile}
	// 		${separatorSizeMobile}
	// 		${buttonGapMobile}
	// 	}
	// 	.eb-advance-heading-wrapper.${blockId} .eb-button-parent .eb-button-text {
	// 		${titleTypographyMobile}
	// 	}
	// `;

	// // Buttons One styles css in strings ⬇
	// const buttonOneStyleDesktop = `
	// 	.eb-advance-heading-wrapper.${blockId} .eb-button-parent.eb-button-one {
	// 		${wrapperBDShadowDesktop}
	// 		background-color: ${attributes.buttonOneColor};
	// 	}
	// 	.eb-advance-heading-wrapper.${blockId} .eb-button-parent.eb-button-one:hover {
	// 		${wrapperBDShadowHoverDesktop}
	// 		background-color: ${hoverButtonOneColor};
	// 	}
	// 	.eb-advance-heading-wrapper.${blockId} .eb-button-parent.eb-button-one .eb-button-one-text {
	// 		color: ${textOneColor};
	// 	}
	// 	.eb-advance-heading-wrapper.${blockId} .eb-button-parent.eb-button-one:hover .eb-button-one-text {
	// 		color: ${hoverTextOneColor};
	// 	}
	// `;
	// const buttonOneStyleTab = `
	// 	.eb-advance-heading-wrapper.${blockId} .eb-button-parent.eb-button-one {
	// 		${wrapperBDShadowTab}
	// 	}
	// 	.eb-advance-heading-wrapper.${blockId} .eb-button-parent.eb-button-one:hover {
	// 		${wrapperBDShadowHoverTab}
	// 	}
	// 	.eb-advance-heading-wrapper.${blockId} .eb-button-parent.eb-button-one .eb-button-one-text {

	// 	}
	// `;
	// const buttonOneStyleMobile = `
	// 	.eb-advance-heading-wrapper.${blockId} .eb-button-parent.eb-button-one {
	// 		${wrapperBDShadowMobile}
	// 	}
	// 	.eb-advance-heading-wrapper.${blockId} .eb-button-parent.eb-button-one:hover {
	// 		${wrapperBDShadowHoverMobile}
	// 	}
	// 	.eb-advance-heading-wrapper.${blockId} .eb-button-parent.eb-button-one .eb-button-one-text {

	// 	}
	// `;

	// // Buttons Two styles css in strings ⬇
	// const buttonTwoStyleDesktop = `
	// 	.eb-advance-heading-wrapper.${blockId} .eb-button-parent.eb-button-two {
	// 		${buttonTwoBDShadowDesktop}
	// 		${buttonGapDesktop}
	// 		background-color: ${buttonTwoColor};
	// 	}
	// 	.eb-advance-heading-wrapper.${blockId} .eb-button-parent.eb-button-two:hover {
	// 		${buttonTwoBDShadowHoverDesktop}
	// 		background-color: ${hoverButtonTwoColor};
	// 	}
	// 	.eb-advance-heading-wrapper.${blockId} .eb-button-parent.eb-button-two .eb-button-two-text {
	// 		color: ${textTwoColor};
	// 	}
	// 	.eb-advance-heading-wrapper.${blockId} .eb-button-parent.eb-button-two:hover .eb-button-two-text {
	// 		color: ${hoverTextTwoColor};
	// 	}
	// `;
	// const buttonTwoStyleTab = `
	// 	.eb-advance-heading-wrapper.${blockId} .eb-button-parent.eb-button-two {
	// 		${buttonTwoBDShadowTab}
	// 		${buttonGapTab}
	// 	}
	// 	.eb-advance-heading-wrapper.${blockId} .eb-button-parent.eb-button-two:hover {
	// 		${buttonTwoBDShadowHoverTab}
	// 	}
	// 	.eb-advance-heading-wrapper.${blockId} .eb-button-parent.eb-button-two .eb-button-two-text {

	// 	}
	// `;
	// const buttonTwoStyleMobile = `
	// 	.eb-advance-heading-wrapper.${blockId} .eb-button-parent.eb-button-two {
	// 		${buttonTwoBDShadowMobile}
	// 		${buttonGapMobile}
	// 	}
	// 	.eb-advance-heading-wrapper.${blockId} .eb-button-parent.eb-button-two:hover {
	// 		${buttonTwoBDShadowHoverMobile}
	// 	}
	// 	.eb-advance-heading-wrapper.${blockId} .eb-button-parent.eb-button-two .eb-button-two-text {

	// 	}
	// `;

	// // Connector styles css in strings ⬇
	// const connectorStylesDesktop = `
	// 	.eb-advance-heading-wrapper.${blockId} .eb-advance-heading__midldeInner span {
	// 		${connectorType === "text"? subtitleTypographyDesktop : buttonConnectorIconSizeDesktop}
	// 		${buttonConnectorHeightDesktop}
	// 		${buttonConnectorWidthDesktop}
	// 		${buttonConnectorLineHeightDesktop}
	// 		${connectorType === "icon" ? 'font-family: "Font Awesome 5 Brands" !important' : null};
	// 		background: ${innerButtonColor};
	// 		color: ${innerButtonTextColor};
	// 	}
	// `;

	// const connectorStylesTab = `
	// 	.eb-advance-heading-wrapper.${blockId} .eb-advance-heading__midldeInner span {
	// 		${connectorType === "text"? subtitleTypographyTab : buttonConnectorIconSizeTab}
	// 		${buttonConnectorHeightTab}
	// 		${buttonConnectorWidthTab}
	// 		${buttonConnectorLineHeightTab}
	// 	}
	// `;

	// const connectorStylesMobile = `
	// 	.eb-advance-heading-wrapper.${blockId} .eb-advance-heading__midldeInner span {
	// 		${connectorType === "text"? subtitleTypographyMobile : buttonConnectorIconSizeMobile}
	// 		${buttonConnectorHeightMobile}
	// 		${buttonConnectorWidthMobile}
	// 		${buttonConnectorLineHeightMobile}
	// 	}
	// `;

	// // all css styles for large screen width (desktop/laptop) in strings ⬇
	// const desktopAllStyles = softMinifyCssStrings(`
	// 		${isCssExists(wrapperStylesDesktop) ? wrapperStylesDesktop : " "}
	// 		${isCssExists(buttonsCommonStyleDesktop) ? buttonsCommonStyleDesktop : " "}
	// 		${isCssExists(buttonOneStyleDesktop) ? buttonOneStyleDesktop : " "}
	// 		${isCssExists(buttonTwoStyleDesktop) ? buttonTwoStyleDesktop : " "}
	// 		${isCssExists(connectorStylesDesktop) ? connectorStylesDesktop : " "}
	// 	`);

	// // all css styles for Tab in strings ⬇
	// const tabAllStyles = softMinifyCssStrings(`
	// 		${isCssExists(wrapperStylesTab) ? wrapperStylesTab : " "}
	// 		${isCssExists(buttonsCommonStyleTab) ? buttonsCommonStyleTab : " "}
	// 		${isCssExists(buttonOneStyleTab) ? buttonOneStyleTab : " "}
	// 		${isCssExists(buttonTwoStyleTab) ? buttonTwoStyleTab : " "}
	// 		${isCssExists(connectorStylesTab) ? connectorStylesTab : " "}
	// 	`);

	// // all css styles for Mobile in strings ⬇
	// const mobileAllStyles = softMinifyCssStrings(`
	// 		${isCssExists(wrapperStylesMobile) ? wrapperStylesMobile : " "}
	// 		${isCssExists(buttonsCommonStyleMobile) ? buttonsCommonStyleMobile : " "}
	// 		${isCssExists(buttonOneStyleMobile) ? buttonOneStyleMobile : " "}
	// 		${isCssExists(buttonTwoStyleMobile) ? buttonTwoStyleMobile : " "}
	// 		${isCssExists(connectorStylesMobile) ? connectorStylesMobile : " "}
	// 	`);

	// // Set All Style in "blockMeta" Attribute
	// useEffect(() => {
	// 	const styleObject = {
	// 		desktop: desktopAllStyles,
	// 		tab: tabAllStyles,
	// 		mobile: mobileAllStyles,
	// 	};
	// 	if (JSON.stringify(blockMeta) != JSON.stringify(styleObject)) {
	// 		setAttributes({ blockMeta: styleObject });
	// 	}
	// }, [attributes]);

	return [
		isSelected && (
			<>
				<Fragment>
					<BlockControls>
						<AlignmentToolbar
							value={align} 
							onChange={(align) => setAttributes({ align })}
							controls={["left", "center", "right"]}
						/>
					</BlockControls>
					<Inspector attributes={attributes} setAttributes={setAttributes} />
				</Fragment>
			</>
		),
		//Edit view here
		<div {...blockProps}>
			<div className="eb-heading-wrapper">
				<RichText
					tagName={tagName}
					className="eb-heading"
					value={titleText}
					formattingControl={["bold", "italic"]}
					onChange={(titleText) => setAttributes({ titleText })}
				/>
			</div>
		</div>,
	];
};