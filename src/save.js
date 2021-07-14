const { RichText, useBlockProps } = wp.blockEditor;

const Save = ({ attributes }) => {
	const {
		blockId,
		preset,
		tagName,
		titleText,
		subtitleText,
	} = attributes;

	return (
		<div {...useBlockProps.save()}>
			<div className="eb-heading-wrapper">
				<RichText.Content
					tagName={tagName}
					className="eb-heading"
					value={titleText}
				/>
			</div>
		</div>
	);
};

export default Save;
