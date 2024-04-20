import {
  Grab,
  GrabLinks
} from "./chunk-GTWKLM6Y.js";
import "./chunk-ZQW2U7BW.js";
import "./chunk-N23ELRPB.js";
import "./chunk-CEQRFMJQ.js";

// node_modules/@tsparticles/interaction-external-grab/browser/index.js
async function loadExternalGrabInteraction(engine, refresh = true) {
  await engine.addInteractor("externalGrab", async (container) => {
    const { Grabber } = await import("./Grabber-GIF7MKWH.js");
    return new Grabber(container);
  }, refresh);
}
export {
  Grab,
  GrabLinks,
  loadExternalGrabInteraction
};
//# sourceMappingURL=browser-GAS2YHQ3.js.map
