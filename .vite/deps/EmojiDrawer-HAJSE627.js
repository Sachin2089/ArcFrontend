import {
  validTypes
} from "./chunk-LFJO4HWU.js";
import "./chunk-ZQW2U7BW.js";
import {
  executeOnSingleOrMultiple,
  getRangeMax,
  isInArray,
  itemFromSingleOrMultiple,
  loadFont
} from "./chunk-N23ELRPB.js";
import "./chunk-CEQRFMJQ.js";

// node_modules/@tsparticles/shape-emoji/browser/Utils.js
function drawEmoji(data) {
  const { context, particle, radius, opacity } = data, emojiData = particle.emojiData, double = 2, diameter = radius * double, previousAlpha = context.globalAlpha;
  if (!emojiData) {
    return;
  }
  context.globalAlpha = opacity;
  context.drawImage(emojiData, -radius, -radius, diameter, diameter);
  context.globalAlpha = previousAlpha;
}

// node_modules/@tsparticles/shape-emoji/browser/EmojiDrawer.js
var defaultFont = '"Twemoji Mozilla", Apple Color Emoji, "Segoe UI Emoji", "Noto Color Emoji", "EmojiOne Color"';
var EmojiDrawer = class {
  constructor() {
    this._emojiShapeDict = /* @__PURE__ */ new Map();
  }
  destroy() {
    for (const [key, emojiData] of this._emojiShapeDict) {
      if (emojiData instanceof ImageBitmap) {
        emojiData == null ? void 0 : emojiData.close();
        this._emojiShapeDict.delete(key);
      }
    }
  }
  draw(data) {
    drawEmoji(data);
  }
  async init(container) {
    const options = container.actualOptions;
    if (!validTypes.find((t) => isInArray(t, options.particles.shape.type))) {
      return;
    }
    const promises = [loadFont(defaultFont)], shapeOptions = validTypes.map((t) => options.particles.shape.options[t]).find((t) => !!t);
    if (shapeOptions) {
      executeOnSingleOrMultiple(shapeOptions, (shape) => {
        if (shape.font) {
          promises.push(loadFont(shape.font));
        }
      });
    }
    await Promise.all(promises);
  }
  particleDestroy(particle) {
    delete particle.emojiData;
  }
  particleInit(container, particle) {
    const double = 2, shapeData = particle.shapeData;
    if (!(shapeData == null ? void 0 : shapeData.value)) {
      return;
    }
    const emoji = itemFromSingleOrMultiple(shapeData.value, particle.randomIndexData), font = shapeData.font ?? defaultFont;
    if (!emoji) {
      return;
    }
    const key = `${emoji}_${font}`, existingData = this._emojiShapeDict.get(key);
    if (existingData) {
      particle.emojiData = existingData;
      return;
    }
    const canvasSize = getRangeMax(particle.size.value) * double;
    let emojiData;
    const maxSize = getRangeMax(particle.size.value);
    if (typeof OffscreenCanvas !== "undefined") {
      const canvas = new OffscreenCanvas(canvasSize, canvasSize), context = canvas.getContext("2d");
      if (!context) {
        return;
      }
      context.font = `400 ${maxSize * double}px ${font}`;
      context.textBaseline = "middle";
      context.textAlign = "center";
      context.fillText(emoji, maxSize, maxSize);
      emojiData = canvas.transferToImageBitmap();
    } else {
      const canvas = document.createElement("canvas");
      canvas.width = canvasSize;
      canvas.height = canvasSize;
      const context = canvas.getContext("2d");
      if (!context) {
        return;
      }
      context.font = `400 ${maxSize * double}px ${font}`;
      context.textBaseline = "middle";
      context.textAlign = "center";
      context.fillText(emoji, maxSize, maxSize);
      emojiData = canvas;
    }
    this._emojiShapeDict.set(key, emojiData);
    particle.emojiData = emojiData;
  }
};
export {
  EmojiDrawer
};
//# sourceMappingURL=EmojiDrawer-HAJSE627.js.map
