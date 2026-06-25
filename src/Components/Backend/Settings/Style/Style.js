import {
  PanelBody,
} from "@wordpress/components";

import {
  ColorControl,
  Typography,
  ColorsControl,

  BoxControl,

} from "../../../../../../bpl-tools/Components";
// import { BorderControl } from "../../../../../bpl-tools/Components/Deprecated";
import { produce } from "immer";
import options from "../../../../utils/options";
import { __ } from "@wordpress/i18n";
import { BorderControl } from "../../../../../../bpl-tools/Components/Deprecated";



const Style = ({ setAttributes, attributes}) => {
  const { pxUnit, emUnit } = options;
  const {
    elements,
    forms,
    labelTypo,
    labelColor,
    inputTypo,
    inputColors,
    inputPadding,
    inputBorder,
    btnTypo,
    btnColors,
    btnBorder,
    btnPadding,
    btnIcon,
    hoverContent,
   
  } = attributes;
 
  return (
    
        <>
          {elements?.label && forms !== "form4" && (
            <PanelBody
              className="bPlPanelBody"
              title={__("Label", "clipboard")}
              initialOpen={false}
            >
              <Typography
                className="mb10"
                label={__("Typography", "clipboard")}
                value={labelTypo}
                onChange={(val) => {
                  setAttributes({ labelTypo: val });
                }}
                produce={produce}
              />

              <ColorControl
                className=""
                label={__("Color", "clipboard")}
                value={labelColor}
                onChange={(val) => setAttributes({ labelColor: val })}
              />
            </PanelBody>
          )}

          <PanelBody
            className="bPlPanelBody"
            title={__("Input", "clipboard")}
            initialOpen={false}
          >
            <Typography
              className="mb10"
              label={__("Typography", "clipboard")}
              value={inputTypo}
              onChange={(val) => {
                setAttributes({ inputTypo: val });
              }}
              produce={produce}
            />

            <ColorsControl
              className="mb20"
              label={__("Colors", "clipboard")}
              value={inputColors}
              onChange={(val) => {
                setAttributes({ inputColors: val });
              }}
            />

            {forms !== "form4" && (
              <>
                <BoxControl
                  label={__("Padding", "clipboard")}
                  values={inputPadding}
                  onChange={(val) => setAttributes({ inputPadding: val })}
                  resetValues={{
                    top: "10px",
                    right: "10px",
                    bottom: "10px",
                    left: "10px",
                  }}
                  units={[pxUnit(3), emUnit(2)]}
                />

                <BorderControl
                  className="mt10"
                  label={__("Border", "clipboard")}
                  value={inputBorder}
                  onChange={(val) => {
                    setAttributes({ inputBorder: val });
                  }}
                />
              </>
            )}
          </PanelBody>

          {forms !== "form4" && (
            <PanelBody
              className="bPlPanelBody"
              title={__("Button", "clipboard")}
              initialOpen={false}
            >
              <Typography
                className="mb10"
                label={__("Typography", "clipboard")}
                value={btnTypo}
                onChange={(val) => {
                  setAttributes({
                    btnTypo: val,
                    btnIcon: { ...btnIcon, size: btnTypo?.fontSize?.desktop },
                  });
                }}
                produce={produce}
              />

              <ColorsControl
                className="mb20"
                label={__("Colors", "clipboard")}
                value={btnColors}
                onChange={(val) => {
                  setAttributes({
                    btnColors: val,
                    btnIcon: { ...btnIcon, color: btnColors?.color },
                  });
                }}
              />

              <BorderControl
                className="mt10 mb10"
                label={__("Border", "clipboard")}
                value={btnBorder}
                onChange={(val) => {
                  setAttributes({ btnBorder: val });
                }}
              />

              <BoxControl
                label={__("Padding", "clipboard")}
                values={btnPadding}
                onChange={(val) => setAttributes({ btnPadding: val })}
                resetValues={{
                  top: "10px",
                  right: "10px",
                  bottom: "10px",
                  left: "10px",
                }}
                units={[pxUnit(3), emUnit(2)]}
              />
            </PanelBody>
          )}

          {forms === "form4" && (
            <PanelBody
              className="bPlPanelBody"
              title={__("Hover content", "clipboard")}
              initialOpen={false}
            >
              <Typography
                className="mb10"
                label={__("Typography", "clipboard")}
                value={hoverContent?.typo}
                onChange={(val) => {
                  setAttributes({
                    hoverContent: { ...hoverContent, typo: val },
                  });
                }}
                produce={produce}
              />

              <ColorsControl
                className="mb20"
                label={__("Colors", "clipboard")}
                value={hoverContent?.colors}
                onChange={(val) => {
                  setAttributes({
                    hoverContent: { ...hoverContent, colors: val },
                  });
                }}
              />
            </PanelBody>
          )}
        </>
   
  );
};

export default Style;
