import {
  Bounce
} from "./chunk-ZNCKAJCQ.js";
import "./chunk-CEQRFMJQ.js";

// node_modules/@tsparticles/interaction-external-bounce/browser/index.js
async function loadExternalBounceInteraction(engine, refresh = true) {
  await engine.addInteractor("externalBounce", async (container) => {
    const { Bouncer } = await import("./Bouncer-LLIJOBSR.js");
    return new Bouncer(container);
  }, refresh);
}
export {
  Bounce,
  loadExternalBounceInteraction
};
//# sourceMappingURL=browser-IMWT46O2.js.map
