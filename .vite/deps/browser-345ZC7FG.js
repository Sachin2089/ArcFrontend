import {
  Bubble,
  BubbleBase,
  BubbleDiv
} from "./chunk-O6BKJ5IN.js";
import "./chunk-ZQW2U7BW.js";
import "./chunk-N23ELRPB.js";
import "./chunk-CEQRFMJQ.js";

// node_modules/@tsparticles/interaction-external-bubble/browser/index.js
async function loadExternalBubbleInteraction(engine, refresh = true) {
  await engine.addInteractor("externalBubble", async (container) => {
    const { Bubbler } = await import("./Bubbler-G25F7UDN.js");
    return new Bubbler(container);
  }, refresh);
}
export {
  Bubble,
  BubbleBase,
  BubbleDiv,
  loadExternalBubbleInteraction
};
//# sourceMappingURL=browser-345ZC7FG.js.map
