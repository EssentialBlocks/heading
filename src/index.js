const { registerBlockType } = wp.blocks;
const { __ } = wp.i18n;

import "./style.scss";
import Edit from "./edit";
import save from "./save";
import icon from "./icon";
import attributes from "./attributes";
import Example from "./example";

registerBlockType("advance-heading/advance-heading", {
	title: __("Advance Heading", "advance-heading"),
	description: __(
		"Create Advance Heading with responsive controls and more features",
		"advance-heading"
	),
	keywords: [__("heading", "advance heading", "heading block", "heading box")],
	icon,
	attributes,
	category: "widgets",
	edit: Edit,
	save,
	example: Example,
});