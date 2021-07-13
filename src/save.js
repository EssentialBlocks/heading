const { RichText, useBlockProps } = wp.blockEditor;

const Save = ({ attributes }) => {
	const {
		blockId,
		preset,
	} = attributes;

	return (
		<div {...useBlockProps.save()}>
			<div className="eb-heading-wrapper">
				<RichText
					// tagName={tagName}
					// style={headingStyle}
					className="eb-heading"
					// value={content}
					formattingControl={["bold", "italic"]}
					// onChange={(content) => setAttributes({ content })}
				/>
			</div>
		</div>
	);
};

export default Save;
