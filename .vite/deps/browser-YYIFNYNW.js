import {
  downloadSvgImage,
  loadImage
} from "./chunk-T6PJCLSS.js";
import "./chunk-ZQW2U7BW.js";
import {
  errorPrefix
} from "./chunk-N23ELRPB.js";
import "./chunk-CEQRFMJQ.js";

// node_modules/@tsparticles/shape-image/browser/index.js
var extLength = 3;
function addLoadImageToEngine(engine) {
  if (engine.loadImage) {
    return;
  }
  engine.loadImage = async (data) => {
    if (!data.name && !data.src) {
      throw new Error(`${errorPrefix} no image source provided`);
    }
    if (!engine.images) {
      engine.images = [];
    }
    if (engine.images.find((t) => t.name === data.name || t.source === data.src)) {
      return;
    }
    try {
      const image = {
        gif: data.gif ?? false,
        name: data.name ?? data.src,
        source: data.src,
        type: data.src.substring(data.src.length - extLength),
        error: false,
        loading: true,
        replaceColor: data.replaceColor,
        ratio: data.width && data.height ? data.width / data.height : void 0
      };
      engine.images.push(image);
      let imageFunc;
      if (data.gif) {
        const { loadGifImage } = await import("./Utils-2LDLPXEC.js");
        imageFunc = loadGifImage;
      } else {
        imageFunc = data.replaceColor ? downloadSvgImage : loadImage;
      }
      await imageFunc(image);
    } catch {
      throw new Error(`${errorPrefix} ${data.name ?? data.src} not found`);
    }
  };
}
async function loadImageShape(engine, refresh = true) {
  addLoadImageToEngine(engine);
  const { ImagePreloaderPlugin } = await import("./ImagePreloader-J2VYY7OB.js"), { ImageDrawer } = await import("./ImageDrawer-AM7QWPIE.js");
  const preloader = new ImagePreloaderPlugin(engine);
  await engine.addPlugin(preloader, refresh);
  await engine.addShape(["image", "images"], new ImageDrawer(engine), refresh);
}
export {
  loadImageShape
};
//# sourceMappingURL=browser-YYIFNYNW.js.map
