import "./chunk-CEQRFMJQ.js";

// node_modules/@tsparticles/shape-image/browser/Options/Classes/Preload.js
var Preload = class {
  constructor() {
    this.src = "";
    this.gif = false;
  }
  load(data) {
    if (!data) {
      return;
    }
    if (data.gif !== void 0) {
      this.gif = data.gif;
    }
    if (data.height !== void 0) {
      this.height = data.height;
    }
    if (data.name !== void 0) {
      this.name = data.name;
    }
    if (data.replaceColor !== void 0) {
      this.replaceColor = data.replaceColor;
    }
    if (data.src !== void 0) {
      this.src = data.src;
    }
    if (data.width !== void 0) {
      this.width = data.width;
    }
  }
};

// node_modules/@tsparticles/shape-image/browser/ImagePreloader.js
var ImagePreloaderPlugin = class {
  constructor(engine) {
    this.id = "imagePreloader";
    this._engine = engine;
  }
  async getPlugin() {
    await Promise.resolve();
    return {};
  }
  loadOptions(options, source) {
    if (!(source == null ? void 0 : source.preload)) {
      return;
    }
    if (!options.preload) {
      options.preload = [];
    }
    const preloadOptions = options.preload;
    for (const item of source.preload) {
      const existing = preloadOptions.find((t) => t.name === item.name || t.src === item.src);
      if (existing) {
        existing.load(item);
      } else {
        const preload = new Preload();
        preload.load(item);
        preloadOptions.push(preload);
      }
    }
  }
  needsPlugin() {
    return true;
  }
};
export {
  ImagePreloaderPlugin
};
//# sourceMappingURL=ImagePreloader-J2VYY7OB.js.map
