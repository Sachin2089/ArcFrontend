import {
  Repulse,
  RepulseBase,
  RepulseDiv
} from "./chunk-2YEYMQ7W.js";
import "./chunk-ZQW2U7BW.js";
import "./chunk-N23ELRPB.js";
import "./chunk-CEQRFMJQ.js";

// node_modules/@tsparticles/interaction-external-repulse/browser/index.js
async function loadExternalRepulseInteraction(engine, refresh = true) {
  await engine.addInteractor("externalRepulse", async (container) => {
    const { Repulser } = await import("./Repulser-XQAVHVIM.js");
    return new Repulser(engine, container);
  }, refresh);
}
export {
  Repulse,
  RepulseBase,
  RepulseDiv,
  loadExternalRepulseInteraction
};
//# sourceMappingURL=browser-Y5GWE346.js.map
