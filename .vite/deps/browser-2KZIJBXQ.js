import "./chunk-CEQRFMJQ.js";

// node_modules/@tsparticles/updater-color/browser/index.js
async function loadColorUpdater(engine, refresh = true) {
  await engine.addParticleUpdater("color", async (container) => {
    const { ColorUpdater } = await import("./ColorUpdater-3WD5HZT7.js");
    return new ColorUpdater(container);
  }, refresh);
}
export {
  loadColorUpdater
};
//# sourceMappingURL=browser-2KZIJBXQ.js.map
