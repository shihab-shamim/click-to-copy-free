import {
  PanelBody,
  ToggleControl,
  SelectControl,
  __experimentalInputControl as InputControl,
} from "@wordpress/components";
import { HelpPanel } from "../../../../../../bpl-tools/Components";
import { checkForm } from "../../../../utils/functions";
import options from "../../../../utils/options";
import { __ } from "@wordpress/i18n";

const Genarel = ({ attributes, setAttributes }) => {
  const { input, elements, forms } = attributes;
  const updateObject = (attr, key, val) => {
    const newAttr = { ...attributes[attr] };
    newAttr[key] = val;
    setAttributes({ [attr]: newAttr });
  };
  return (
   
     <>
      <HelpPanel
        slug="click-to-copy"
        docsLink="https://bplugins.com/docs/click-to-copy"
      />
      <PanelBody
        className="bPlPanelBody ctcBPanelBody"
        title={__("Input", "clipboard")}
        initialOpen={false}
      >


        <InputControl
          className="mt10"
          label={__("Content", "clipboard")}
          labelPosition="top"
          value={input?.offerContent}
          onChange={(val) => updateObject("input", "offerContent", val)}
        />
      </PanelBody>

      <PanelBody
        className="bPlPanelBody"
        title={__("Elements", "clipboard")}
        initialOpen={false}
      >
        {forms !== "form4" && (
          <>
            <ToggleControl
              className="mt10"
              label={__("Label", "clipboard")}
              checked={elements?.label}
              onChange={(val) => {
                updateObject("elements", "label", val);
              }}
            />

            <ToggleControl
              className="mt10"
              label={__("Icon", "clipboard")}
              checked={elements?.icon}
              onChange={(val) => {
                updateObject("elements", "icon", val);
              }}
            />
          </>
        )}

        <ToggleControl
          className="mt10"
          label={__("Text", "clipboard")}
          checked={elements?.text}
          onChange={(val) => {
            updateObject("elements", "text", val);
          }}
        />
      </PanelBody>
      

      <PanelBody
        className="bPlPanelBody"
        title={__("Select a Themes", "clipboard")}
        initialOpen={false}
      >
        <SelectControl
          label={__("Select Form", "clipboard")}
          labelPosition="side"
          value={forms}
          options={options?.forms}
          onChange={(val) => { setAttributes({ forms: val, ...checkForm(val) })}}
        />
      </PanelBody>
    </>
  );
};

export default Genarel;
