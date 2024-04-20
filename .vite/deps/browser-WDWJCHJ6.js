import {
  validTypes
} from "./chunk-LFJO4HWU.js";
import "./chunk-CEQRFMJQ.js";

// node_modules/@tsparticles/shape-emoji/browser/index.js
async function loadEmojiShape(engine, refresh = true) {
  const { EmojiDrawer } = await import("./EmojiDrawer-HAJSE627.js");
  await engine.addShape(validTypes, new EmojiDrawer(), refresh);
}
export {
  loadEmojiShape
};
//# sourceMappingURL=browser-WDWJCHJ6.js.map
