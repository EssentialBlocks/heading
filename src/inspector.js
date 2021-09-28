/**
 * WordPress dependencies
 */
 const { __ } = wp.i18n;
 const { InspectorControls, PanelColorSettings } = wp.blockEditor;
 const { 
	 PanelBody,
	 SelectControl,
	 ToggleControl,
	 TextControl,
	 TextareaControl,
	 Button,
	 ButtonGroup,
	 BaseControl,
	 TabPanel,
 } = wp.components;
 const { useEffect } = wp.element;
 const { select } = wp.data;
 
 /**
  * Internal depencencies
  */
 import {
	 WRAPPER_BG,
	 WRAPPER_MARGIN,
	 WRAPPER_PADDING,
	 WRAPPER_BORDER_SHADOW,
	 TITLE_MARGIN,
	 SUBTITLE_MARGIN,
	 SEPARATOR_MARGIN,
	 SEPARATOR_LINE_SIZE,
	 SEPARATOR_ICON_SIZE,
	 SEPARATOR_WIDTH,
	 SEPARATOR_POSITION,
	 NORMAL_HOVER,
	 UNIT_TYPES,
	 SEPARATOR_UNIT_TYPES,
	 PRESETS,
	 TEXT_ALIGN,
	 HEADING,
	 SEPERATOR_STYLES,
	 SEPARATOR_TYPE,
 } from "./constants/constants";
 import {TITLE_TYPOGRAPHY, SUBTITLE_TYPOGRAPHY } from "./constants/typographyPrefixConstants";
 import {mimmikCssForResBtns, mimmikCssOnPreviewBtnClickWhileBlockSelected} from "../util/helpers";
 import FontIconPicker from "@fonticonpicker/react-fonticonpicker";
 import faIcons from "../util/faIcons";
 import ResponsiveDimensionsControl from "../util/dimensions-control-v2";
 import TypographyDropdown from "../util/typography-control-v2";
 import BorderShadowControl from "../util/border-shadow-control";
 import ResponsiveRangeController from "../util/responsive-range-control";
 import BackgroundControl from "../util/background-control";
 import '@fonticonpicker/react-fonticonpicker/dist/fonticonpicker.base-theme.react.css';
 import '@fonticonpicker/react-fonticonpicker/dist/fonticonpicker.material-theme.react.css';
 
 import objAttributes from "./attributes";
 
 function Inspector(props) {
	 const { attributes, setAttributes } = props;
	 const {
		 resOption,
		 preset,
		 align,
		 tagName,
		 titleText,
		 subtitleText,
		 displaySubtitle,
		 displaySeperator,
		 titleColor,
		 titleHoverColor,
		 titleColorType,
		 subtitleColor, 
		 subtitleHoverColor, 
		 subtitleColorType,
		 separatorColor,
		 separatorHoverColor,
		 separatorColorType,
		 seperatorPosition,
		 seperatorType,
		 seperatorStyle,
		 separatorIcon,
	 } = attributes;
 
	 // this useEffect is for setting the resOption attribute to desktop/tab/mobile depending on the added 'eb-res-option-' class only the first time once
	 useEffect(() => {
		 setAttributes({
			 resOption: select("core/edit-post").__experimentalGetPreviewDeviceType(),
		 });
	 }, []);
 
	 // this useEffect is for mimmiking css for all the eb blocks on resOption changing
	 useEffect(() => {
		 mimmikCssForResBtns({
			 domObj: document,
			 resOption,
		 });
	 }, [resOption]);
 
	 // this useEffect is to mimmik css for responsive preview in the editor page when clicking the buttons in the 'Preview button of wordpress' located beside the 'update' button while any block is selected and it's inspector panel is mounted in the DOM
	 useEffect(() => {
		 const cleanUp = mimmikCssOnPreviewBtnClickWhileBlockSelected({
			 domObj: document,
			 select,
			 setAttributes,
		 });
		 return () => {
			 cleanUp();
		 };
	 }, []);
 
	 const resRequiredProps = {
		 setAttributes,
		 resOption,
		 attributes,
	 };
 
	 const changePreset = (selected) => {
		 setAttributes({ preset: selected });
		 switch(selected) {
			 case 'preset-0':
				 for (const [key, value] of Object.entries(attributes)) {
					const nonChangedAttrs = [
						"titleText", 
						"subtitleText"
					]
					if (!nonChangedAttrs.includes(key)) {
						setAttributes({
							[key]: objAttributes[key].default
						});
					}
				 }
				 break;
			 case 'preset-1':
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
					 wrprBgbackgroundType: "classic",
				 });
				 break;
			 case 'preset-2':
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
					 wrprBgbackgroundType: "classic",
 
				 });
				 break;
			 case 'preset-3':
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
					 wrprBgbackgroundType: "classic",
				 });
				 break;
			 default:
			   return false;
		 }
	 };
 
	 return (
		 <InspectorControls key="controls">
			 <div className="eb-panel-control">
			 
				 <TabPanel
					 className="eb-parent-tab-panel"
					 activeClass="active-tab"
					 // onSelect={onSelect}
					 tabs={ [
						 {
							 name: 'general',
							 title: 'General',
							 className: 'eb-tab general',
						 },
						 {
							 name: 'styles',
							 title: 'Style',
							 className: 'eb-tab styles',
						 },
						 {
							 name: 'advance',
							 title: 'Advanced',
							 className: 'eb-tab advance',
						 },
					 ] }
				 >
					 {(tab) =>
						 <div className={"eb-tab-controls" + tab.name}>
							 {tab.name === "general" && (
								 <>
									 <PanelBody 
										 title={__("General")} 
										 initialOpen={true}
									 >
										 <SelectControl
											 label={__("Preset Designs")}
											 value={preset}
											 options={PRESETS}
											 onChange={(selected) => changePreset(selected)}
										 />
										 <BaseControl label={__("Alignment")} id="eb-advance-heading-alignment">
											 <ButtonGroup id="eb-advance-heading-alignment">
												 {TEXT_ALIGN.map((item) => (
													 <Button
														 isLarge
														 isPrimary={align === item.value}
														 isSecondary={align !== item.value}
														 onClick={() =>
															 setAttributes({
																 align: item.value,
															 })
														 }
													 >
														 {item.label}
													 </Button>
												 ))}
											 </ButtonGroup>
										 </BaseControl>
										 <BaseControl label={__("Title Level")} id="eb-advance-heading-alignment">
											 <ButtonGroup className="eb-advance-heading-alignment">
												 {HEADING.map((item) => (
													 <Button
														 isLarge
														 isPrimary={tagName === item.value}
														 isSecondary={tagName !== item.value}
														 onClick={() => setAttributes({ tagName: item.value })}
													 >
														 {item.label}
													 </Button>
												 ))}
											 </ButtonGroup>
										 </BaseControl>
										 <TextControl
											 label={__("Title Text")}
											 value={titleText}
											 onChange={(text) => setAttributes({ titleText: text })}
										 />
										 <ToggleControl
											 label={__("Display Subtilte")}
											 checked={displaySubtitle}
											 onChange={() =>
												 setAttributes({ displaySubtitle: !displaySubtitle })
											 }
										 />
										 {displaySubtitle && (
											 <TextareaControl
												 label={__("Subtitle Text")}
												 value={subtitleText}
												 onChange={(text) => setAttributes({ subtitleText: text })}
											 />
										 )}
										 <ToggleControl
											 label={__("Display Seperator")}
											 checked={displaySeperator}
											 onChange={() =>
												 setAttributes({ displaySeperator: !displaySeperator })
											 }
										 />
									 </PanelBody>
								 </>
							 )}
 
							 {tab.name === "styles" && (
								 <>
									 <PanelBody title={__("Title")} initialOpen={true}>
										 <TypographyDropdown
											 baseLabel={__("Typography", "advance-heading")}
											 typographyPrefixConstant={TITLE_TYPOGRAPHY}
											 resRequiredProps={resRequiredProps}
										 />
 
										 <ButtonGroup className="eb-inspector-btn-group">
											 {NORMAL_HOVER.map((item) => (
												 <Button
													 isLarge
													 isPrimary={titleColorType === item.value}
													 isSecondary={titleColorType !== item.value}
													 onClick={() => setAttributes({ titleColorType: item.value })}
												 >
													 {item.label}
												 </Button>
											 ))}
										 </ButtonGroup>
 
										 {titleColorType === "normal" && (
											 <PanelColorSettings
												 className={"eb-subpanel"}
												 title={__("Normal Color")}
												 initialOpen={true}
												 colorSettings={[
													 {
														 value: titleColor,
														 onChange: (newColor) =>
															 setAttributes({ titleColor: newColor }),
														 label: __("Button One Color"),
													 }
												 ]}
											 />
										 )}
 
										 {titleColorType === "hover" && (
											 <PanelColorSettings
												 className={"eb-subpanel"}
												 title={__("Hover Color")}
												 initialOpen={true}
												 colorSettings={[
													 {
														 value: titleHoverColor,
														 onChange: (newColor) =>
															 setAttributes({ titleHoverColor: newColor }),
														 label: __("Button One Color"),
													 }
												 ]}
											 />
										 )}
										 <ResponsiveDimensionsControl
											 resRequiredProps={resRequiredProps}
											 controlName={TITLE_MARGIN}
											 baseLabel="Margin"
										 />
									 </PanelBody>
 
									 <PanelBody title={__("Sub Title")} initialOpen={false}>
										 <TypographyDropdown
											 baseLabel={__("Typography", "advance-heading")}
											 typographyPrefixConstant={SUBTITLE_TYPOGRAPHY}
											 resRequiredProps={resRequiredProps}
										 />
 
										 <ButtonGroup className="eb-inspector-btn-group">
											 {NORMAL_HOVER.map((item) => (
												 <Button
													 isLarge
													 isPrimary={subtitleColorType === item.value}
													 isSecondary={subtitleColorType !== item.value}
													 onClick={() => setAttributes({ subtitleColorType: item.value })}
												 >
													 {item.label}
												 </Button>
											 ))}
										 </ButtonGroup>
										 {subtitleColorType === "normal" && (
											 <PanelColorSettings
												 className={"eb-subpanel"}
												 title={__("Normal Color")}
												 initialOpen={true}
												 colorSettings={[
													 {
														 value: subtitleColor,
														 onChange: (newColor) =>
															 setAttributes({ subtitleColor: newColor }),
														 label: __("Subtitle Color"),
													 }
												 ]}
											 />
										 )}
 
										 {subtitleColorType === "hover" && (
											 <PanelColorSettings
												 className={"eb-subpanel"}
												 title={__("Hover Color")}
												 initialOpen={true}
												 colorSettings={[
													 {
														 value: subtitleHoverColor,
														 onChange: (newColor) =>
															 setAttributes({ subtitleHoverColor: newColor }),
														 label: __("Subtitle Hover Color"),
													 }
												 ]}
											 />
										 )}
 
										 <ResponsiveDimensionsControl
											 resRequiredProps={resRequiredProps}
											 controlName={SUBTITLE_MARGIN}
											 baseLabel="Margin"
										 />
									 </PanelBody>
									 
									 {displaySeperator && (
										 <PanelBody title={__("Separator")} initialOpen={false}>
											 <SelectControl
												 label={__("Separator Position")}
												 value={seperatorPosition}
												 options={SEPARATOR_POSITION}
												 onChange={(seperatorPosition) => setAttributes({ seperatorPosition })}
											 />
											 <BaseControl label={__("Separator Type")} id="eb-advance-heading-alignment">
												 <ButtonGroup id="eb-advance-heading-alignment">
													 {SEPARATOR_TYPE.map((item) => (
														 <Button
															 isLarge
															 isPrimary={seperatorType === item.value}
															 isSecondary={seperatorType !== item.value}
															 onClick={() =>
																 setAttributes({
																	 seperatorType: item.value,
																 })
															 }
														 >
															 {item.label}
														 </Button>
													 ))}
												 </ButtonGroup>
											 </BaseControl>
 
											 {seperatorType === "line" && (
												 <>
													 <SelectControl
														 label={__("Separator Style")}
														 value={seperatorStyle}
														 options={SEPERATOR_STYLES}
														 onChange={(seperatorStyle) => setAttributes({ seperatorStyle })}
													 />
													 <ResponsiveRangeController
														 baseLabel={__("Separator Height", "advance-heading")}
														 controlName={SEPARATOR_LINE_SIZE}
														 resRequiredProps={resRequiredProps}
														 units={UNIT_TYPES}
														 min={0}
														 max={100}
														 step={1}
													 />
												 </>
											 )}
 
											 {seperatorType === "icon" && (
												 <>
													 <BaseControl label={__("Icon")}>
														 <FontIconPicker
															 icons={faIcons}
															 value={separatorIcon}
															 onChange={(icon) => setAttributes({ separatorIcon: icon })}
															 appendTo="body"
														 />
													 </BaseControl>
													 <ResponsiveRangeController
														 baseLabel={__("Icon Size", "advance-heading")}
														 controlName={SEPARATOR_ICON_SIZE}
														 resRequiredProps={resRequiredProps}
														 units={UNIT_TYPES}
														 min={0}
														 max={100}
														 step={1}
													 />
												 </>
											 )}
											 <ResponsiveRangeController
												 baseLabel={__("Separator Width", "advance-heading")}
												 controlName={SEPARATOR_WIDTH}
												 resRequiredProps={resRequiredProps}
												 units={SEPARATOR_UNIT_TYPES}
												 min={0}
												 max={300}
												 step={1}
											 />
											 
											 <ButtonGroup className="eb-inspector-btn-group">
												 {NORMAL_HOVER.map((item) => (
													 <Button
														 isLarge
														 isPrimary={separatorColorType === item.value}
														 isSecondary={separatorColorType !== item.value}
														 onClick={() => setAttributes({ separatorColorType: item.value })}
													 >
														 {item.label}
													 </Button>
												 ))}
											 </ButtonGroup>
											 
											 {separatorColorType === "normal" && (
												 <PanelColorSettings
													 className={"eb-subpanel"}
													 separator={__("Normal Color")}
													 initialOpen={true}
													 colorSettings={[
														 {
															 value: separatorColor,
															 onChange: (newColor) =>
																 setAttributes({ separatorColor: newColor }),
															 label: __("Color"),
														 }
													 ]}
												 />
											 )}
 
											 {separatorColorType === "hover" && (
												 <PanelColorSettings
													 className={"eb-subpanel"}
													 separator={__("Hover Color")}
													 initialOpen={true}
													 colorSettings={[
														 {
															 value: separatorHoverColor,
															 onChange: (newColor) =>
																 setAttributes({ separatorHoverColor: newColor }),
															 label: __("Color"),
														 }
													 ]}
												 />
											 )}
 
											 <ResponsiveDimensionsControl
												 resRequiredProps={resRequiredProps}
												 controlName={SEPARATOR_MARGIN}
												 baseLabel="Margin"
											 />
										 </PanelBody>
									 )}
								 </>
							 )}
 
							 {tab.name === "advance" && (
								 <>
									 <PanelBody>
										 <ResponsiveDimensionsControl
											 resRequiredProps={resRequiredProps}
											 controlName={WRAPPER_MARGIN}
											 baseLabel="Margin"
										 />
										 <ResponsiveDimensionsControl
											 resRequiredProps={resRequiredProps}
											 controlName={WRAPPER_PADDING}
											 baseLabel="Padding"
										 />
									 </PanelBody>
									 <PanelBody title={__("Background")} initialOpen={false}>
										 <BackgroundControl
											 controlName={WRAPPER_BG}
											 resRequiredProps={resRequiredProps}
										 />
									 </PanelBody>
									 <PanelBody title={__("Border & Shadow")} initialOpen={false}>
										 <BorderShadowControl
											 controlName={WRAPPER_BORDER_SHADOW}
											 resRequiredProps={resRequiredProps}
											 // noShadow
											 // noBorder
										 />
									 </PanelBody>
								 </>
							 )}
							 
						 </div>
					 }
 
 
				 </TabPanel>
			 </div>
		 </InspectorControls>
	 );
 }
 
 export default Inspector;
 