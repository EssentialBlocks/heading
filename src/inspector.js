/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { InspectorControls, PanelColorSettings } = wp.blockEditor;
const { 
	PanelBody,
	PanelRow,
	SelectControl,
	ToggleControl,
	TextControl,
	TextareaControl,
	Button,
	ButtonGroup,
	BaseControl,
	TabPanel,
	displaySubtitle,
	displaySeperator,
	seperatorStyle,
} = wp.components;
const { useEffect, useState } = wp.element;
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
	SEPARATOR_SIZE,
	NORMAL_HOVER,
	UNIT_TYPES,
	CONNECTOR_TYPE,
	PRESETS,
	TEXT_ALIGN,
	CONTENT_POSITION,
	HEADING,
	SEPERATOR_STYLES,
} from "./constants/constants";
import { TITLE_TYPOGRAPHY, SUBTITLE_TYPOGRAPHY } from "./constants/typographyPrefixConstants";
import {
	mimmikCssForResBtns,
	mimmikCssOnPreviewBtnClickWhileBlockSelected,
} from "../util/helpers";
import {BUTTONS_TYPOGRAPHY, BUTTONS_CONNECTOR_TYPOGRAPHY} from "./constants/typographyPrefixConstants";
import FontIconPicker from "@fonticonpicker/react-fonticonpicker";
import '@fonticonpicker/react-fonticonpicker/dist/fonticonpicker.base-theme.react.css';
import '@fonticonpicker/react-fonticonpicker/dist/fonticonpicker.material-theme.react.css';
import faIcons from "../util/faIcons";
import ColorControl from "../util/color-control";
import ResponsiveDimensionsControl from "../util/dimensions-control-v2";
import TypographyDropdown from "../util/typography-control-v2";
import BorderShadowControl from "../util/border-shadow-control";
import ResponsiveRangeController from "../util/responsive-range-control";

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
		separatorSize,
		onTop,
		titleColor,
		titleHoverColor,
		titleColorType,
		subtitleColor, 
		subtitleHoverColor, 
		subtitleColorType,
		separatorColor,
		separatorHoverColor,
		separatorColorType
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
			case 'preset-1':
				setAttributes({
					showConnector: "true",
					buttonOneBorderShadowRds_Top: 20,
					buttonOneBorderShadowRds_Bottom: 0,
					buttonOneBorderShadowRds_Left: 20,
					buttonOneBorderShadowRds_Right: 0,
					buttonTwoBorderShadowRds_Top: 0,
					buttonTwoBorderShadowRds_Bottom: 20,
					buttonTwoBorderShadowRds_Left: 0,
					buttonTwoBorderShadowRds_Right: 20,
					buttonsGapRange: 0,
				});
				break;
			case 'preset-2':
				setAttributes({
					showConnector: false,
					buttonOneBorderShadowRds_Top: "30",
					buttonOneBorderShadowRds_Bottom: "30",
					buttonOneBorderShadowRds_Left: "30",
					buttonOneBorderShadowRds_Right: "30",
					buttonTwoBorderShadowRds_Top: "30",
					buttonTwoBorderShadowRds_Bottom: "30",
					buttonTwoBorderShadowRds_Left: "30",
					buttonTwoBorderShadowRds_Right: "30",
					buttonsGapRange: 20,
				});
				break;
			case 'preset-3':
				setAttributes({
					showConnector: false,
					buttonOneBorderShadowRds_Top: "0",
					buttonOneBorderShadowRds_Bottom: "0",
					buttonOneBorderShadowRds_Left: "15",
					buttonOneBorderShadowRds_Right: "15",
					buttonTwoBorderShadowRds_Top: "15",
					buttonTwoBorderShadowRds_Bottom: "15",
					buttonTwoBorderShadowRds_Left: "0",
					buttonTwoBorderShadowRds_Right: "0",
					buttonsGapRange: 20,
				});
				break;
			case 'preset-4':
				setAttributes({
					showConnector: false,
					buttonOneBorderShadowRds_Top: "30",
					buttonOneBorderShadowRds_Bottom: "30",
					buttonOneBorderShadowRds_Left: "30",
					buttonOneBorderShadowRds_Right: "30",
					buttonTwoBorderShadowRds_Top: "30",
					buttonTwoBorderShadowRds_Bottom: "30",
					buttonTwoBorderShadowRds_Left: "30",
					buttonTwoBorderShadowRds_Right: "30",
					buttonsGapRange: 10,
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
							title: 'Styles',
							className: 'eb-tab styles',
						},
						{
							name: 'advance',
							title: 'Advance',
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
														label: __("Button One Color"),
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
														value: titleHoverColor,
														onChange: (newColor) =>
															setAttributes({ titleHoverColor: newColor }),
														label: __("Button One Color"),
													}
												]}
											/>
										)}
									</PanelBody>

									<PanelBody title={__("Separator")} initialOpen={false}>
										{displaySeperator && (
											<Fragment>
												<ToggleControl
													label={__("On Top")}
													checked={onTop}
													onChange={() => setAttributes({ onTop: !onTop })}
												/>
												<ResponsiveRangeController
													baseLabel={__("Size", "advance-heading")}
													controlName={SEPARATOR_SIZE}
													resRequiredProps={resRequiredProps}
													units={UNIT_TYPES}
													min={0}
													max={100}
													step={1}
												/>

												<SelectControl
													label={__("Style")}
													value={seperatorStyle}
													options={SEPERATOR_STYLES}
													onChange={(seperatorStyle) => setAttributes({ seperatorStyle })}
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
																label: __("Button One Color"),
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
																label: __("Button One Color"),
															}
														]}
													/>
												)}
											</Fragment>
										)}
										{!displaySeperator && (
											<PanelRow>Separator is is Disabled</PanelRow>
										)}
									</PanelBody>
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
