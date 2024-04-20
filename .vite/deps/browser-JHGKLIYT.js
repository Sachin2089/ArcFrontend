import {
  Links,
  LinksShadow,
  LinksTriangle
} from "./chunk-FNR4R7D2.js";
import "./chunk-ZQW2U7BW.js";
import "./chunk-N23ELRPB.js";
import "./chunk-CEQRFMJQ.js";

// node_modules/@tsparticles/interaction-particles-links/browser/index.js
async function loadParticlesLinksInteraction(engine, refresh = true) {
  const { loadLinksInteraction } = await import("./interaction-DIESMM7U.js"), { loadLinksPlugin } = await import("./plugin-NH4Q32HE.js");
  await loadLinksInteraction(engine, refresh);
  await loadLinksPlugin(engine, refresh);
}
export {
  Links,
  LinksShadow,
  LinksTriangle,
  loadParticlesLinksInteraction
};
//# sourceMappingURL=browser-JHGKLIYT.js.map
