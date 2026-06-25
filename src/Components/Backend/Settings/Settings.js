import { useEffect } from "@wordpress/element";

import { BlockControls, InspectorControls } from "@wordpress/block-editor";
import { TabPanel } from "@wordpress/components";

import {
  tabController,
  checkForm,
  toolTipPresets,
} from "../../../utils/functions";
import options from "../../../utils/options";
import icons from "../../../utils/icons";
import Genarel from "./Genaral/Genarel";
import Style from "./Style/Style";
import BlockPreview from "./panel/BlockPreview ";
const { generalStyleTabs } = options;

const Settings = ({
  attributes,
  setAttributes,
  device,

}) => {
  const { btnIcon, forms } = attributes;

  

  useEffect(() => {
    icons?.iconCopy(btnIcon.size);
    icons?.iconCopy(btnIcon.color);
  }, [btnIcon]);

  return (
    <>
      <InspectorControls>
        <TabPanel
          className="bPlTabPanel"
          activeClass="activeTab"
          tabs={generalStyleTabs}
          onSelect={() => tabController()}
        >
          {(tab) => (
            <>
              {"general" === tab.name && (
                <Genarel
                  attributes={attributes}
                  setAttributes={setAttributes}
                  device={device}
              
                />
              )}

              {"style" === tab.name && (
                <Style
                  attributes={attributes}
                  setAttributes={setAttributes}
                  device={device}
                  
                />
              )}
            </>
          )}
        </TabPanel>
      </InspectorControls>
      <BlockControls>
        <BlockPreview
          options={toolTipPresets}

          value={forms}
          onChange={(val) => {setAttributes({ forms: val, ...checkForm(val) }) }}
        />
      </BlockControls>

    </>
  );
};
export default Settings;
