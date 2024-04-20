import {
  Remove
} from "./chunk-NEKY2FDO.js";
import "./chunk-ZQW2U7BW.js";
import "./chunk-N23ELRPB.js";
import "./chunk-CEQRFMJQ.js";

// node_modules/@tsparticles/interaction-external-remove/browser/index.js
async function loadExternalRemoveInteraction(engine, refresh = true) {
  await engine.addInteractor("externalRemove", async (container) => {
    const { Remover } = await import("./Remover-2MQBQS4H.js");
    return new Remover(container);
  }, refresh);
}
export {
  Remove,
  loadExternalRemoveInteraction
};
//# sourceMappingURL=browser-ZTOIABKY.js.map
