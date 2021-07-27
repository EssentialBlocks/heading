const { registerBlockType } = wp.blocks;
const { __ } = wp.i18n;

import "./style.scss";
import Edit from "./edit";
import save from "./save";
import { HeadingIcon } from "../util/icons";
import attributes from "./attributes";
import Example from "./example";

registerBlockType("advance-heading/advance-heading", {
	title: __("Advanced Heading", "advance-heading"),
	description: __(
		"Create Advanced Heading with Title, Subtitle and Separator Controls",
		"advance-heading"
	),
	keywords: [__("heading", "Advanced Heading", "heading block", "heading box")],
	icon: HeadingIcon,
	attributes,
	category: "widgets",
	edit: Edit,
	save,
	example: Example,
});