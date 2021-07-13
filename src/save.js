const { RichText, useBlockProps } = wp.blockEditor;

const Save = ({ attributes }) => {
	const {
		blockId,
		preset,
		buttonTextOne,
		buttonTextTwo,
		buttonURLOne,
		buttonURLTwo,
		innerButtonText,
		innerButtonIcon,
		showConnector,
		connectorType,
	} = attributes;

	return (
		<div {...useBlockProps.save()}>
			<div className={`eb-advance-heading-wrapper ${blockId} ${preset}`} data-id={blockId}>
				<a className={"eb-button-parent eb-button-one"} href={buttonURLOne}>
					<div className="eb-button-text eb-button-one-text">{buttonTextOne}</div>
				</a>

				{showConnector && (
					<div
						className="eb-advance-heading__midldeInner"
					>
						{connectorType === 'icon' && (
							<span>
								<i className={`${innerButtonIcon ? innerButtonIcon : "fas fa-arrows-alt-h"}`}></i>
							</span>
						)}

						{connectorType === 'text' && <span>{innerButtonText}</span>}
					</div>
				)}

				<a className={"eb-button-parent eb-button-two"} href={buttonURLTwo}>
					<div className="eb-button-text eb-button-two-text">{buttonTextTwo}</div>
				</a>
			</div>
		</div>
	);
};

export default Save;
