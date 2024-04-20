import {
  Push
} from "./chunk-ZRIF4JLQ.js";
import "./chunk-ZQW2U7BW.js";
import "./chunk-N23ELRPB.js";
import "./chunk-CEQRFMJQ.js";

// node_modules/@tsparticles/interaction-external-push/browser/index.js
async function loadExternalPushInteraction(engine, refresh = true) {
  await engine.addInteractor("externalPush", async (container) => {
    const { Pusher } = await import("./Pusher-75WD4NXF.js");
    return new Pusher(container);
  }, refresh);
}
export {
  Push,
  loadExternalPushInteraction
};
//# sourceMappingURL=browser-A5HJWOA6.js.map
