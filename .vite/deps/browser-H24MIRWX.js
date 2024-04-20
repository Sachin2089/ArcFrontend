import {
  Slow
} from "./chunk-WDCMM45Z.js";
import "./chunk-CEQRFMJQ.js";

// node_modules/@tsparticles/interaction-external-slow/browser/index.js
async function loadExternalSlowInteraction(engine, refresh = true) {
  await engine.addInteractor("externalSlow", async (container) => {
    const { Slower } = await import("./Slower-P4PQNNFX.js");
    return new Slower(container);
  }, refresh);
}
export {
  Slow,
  loadExternalSlowInteraction
};
//# sourceMappingURL=browser-H24MIRWX.js.map
