const { RichText, useBlockProps } = wp.blockEditor;

const Save = ({ attributes }) => {
	const {
		blockId,
		preset,
		tagName,
		titleText,
		displaySubtitle,
		subtitleText,
		seperatorType,
		displaySeperator,
		separatorIcon,
	} = attributes;

	return (
		<div {...useBlockProps.save()}>
			<div className={`eb-advance-heading-wrapper ${blockId} ${preset}`} data-id={blockId}>
				<RichText.Content
					tagName={tagName}
					className="eb-ah-title"
					value={titleText}
					formattingControl={["bold", "italic"]}
					onChange={(titleText) => setAttributes({ titleText })}
				/>
				{displaySubtitle && (
					<RichText.Content
						tagName={"p"}
						className="eb-ah-subtitle"
						value={subtitleText}
						formattingControl={["bold", "italic"]}
						onChange={(subtitleText) => setAttributes({ subtitleText })}
					/>
				)}
				{displaySeperator && (
					<div className={"eb-ah-separator " + seperatorType}>
						{seperatorType === "icon" && (
							<i className={`${separatorIcon ? separatorIcon : "fas fa-arrow-circle-down"}`}></i>
						)}
					</div>
				)}
				
			</div>
		</div>
	);
};

export default Save;
