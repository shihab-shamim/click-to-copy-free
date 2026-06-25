		import { useRef, useState } from "react";
		import { __ } from "@wordpress/i18n";
		import Style from "./Components/Common/Style";
		import Forms from "./Forms";
		import { createRoot } from "react-dom/client";
		import "./style.scss";

		document.addEventListener("DOMContentLoaded", () => {
		const clickToCopyEles = document.querySelectorAll(
			".wp-block-ctcb-click-to-copy"
		);

		clickToCopyEles.forEach((clickToCopyEle) => {
			const attributes = JSON.parse(clickToCopyEle.dataset.attributes);

			createRoot(clickToCopyEle).render(
			<>
				<RenderForms attributes={attributes} clickToCopyEle={clickToCopyEle} />
			</>
			);

			clickToCopyEle?.removeAttribute("data-attributes");
		});
		});

		const RenderForms = ({ attributes, clickToCopyEle }) => {
		const { input, forms } = attributes;
		const [copied, setCopied] = useState(false);
		const divRef = useRef(null);

		const labelEl = (
			<div className="label" dangerouslySetInnerHTML={{ __html: input?.label }} />
		);
		const InputEl = (
			<div className="text" ref={divRef}>
			{forms === "form1" && copied ? (
				__("Copied", "clipboard")
			) : (
				<div dangerouslySetInnerHTML={{ __html: input?.offerContent }} />
			)}
			</div>
		);

		const formsProps = {
			attributes,
			labelEl,
			InputEl,
			copied,
			setCopied,
			divRef,
		};

		return (
			<>
			<Style attributes={attributes} EleId={clickToCopyEle.id} />
			
				<Forms {...formsProps} />
			
			</>
		);
		};
