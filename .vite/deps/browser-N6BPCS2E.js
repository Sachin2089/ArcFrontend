import "./chunk-ZQW2U7BW.js";
import {
  addEasing
} from "./chunk-N23ELRPB.js";
import "./chunk-CEQRFMJQ.js";

// node_modules/@tsparticles/plugin-easing-quad/browser/index.js
async function loadEasingQuadPlugin() {
  addEasing("ease-in-quad", (value) => value ** 2);
  addEasing("ease-out-quad", (value) => 1 - (1 - value) ** 2);
  addEasing("ease-in-out-quad", (value) => value < 0.5 ? 2 * value ** 2 : 1 - (-2 * value + 2) ** 2 / 2);
  await Promise.resolve();
}
export {
  loadEasingQuadPlugin
};
//# sourceMappingURL=browser-N6BPCS2E.js.map
