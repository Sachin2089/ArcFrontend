import {
  Attract
} from "./chunk-IRRU4MCF.js";
import "./chunk-CEQRFMJQ.js";

// node_modules/@tsparticles/interaction-external-attract/browser/index.js
async function loadExternalAttractInteraction(engine, refresh = true) {
  await engine.addInteractor("externalAttract", async (container) => {
    const { Attractor } = await import("./Attractor-A34US5NV.js");
    return new Attractor(engine, container);
  }, refresh);
}
export {
  Attract,
  loadExternalAttractInteraction
};
//# sourceMappingURL=browser-NOVVTQ6K.js.map
