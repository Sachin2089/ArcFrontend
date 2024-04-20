import "./chunk-CEQRFMJQ.js";

// node_modules/@tsparticles/updater-stroke-color/browser/index.js
async function loadStrokeColorUpdater(engine, refresh = true) {
  await engine.addParticleUpdater("strokeColor", async (container) => {
    const { StrokeColorUpdater } = await import("./StrokeColorUpdater-Z2GD4X74.js");
    return new StrokeColorUpdater(container);
  }, refresh);
}
export {
  loadStrokeColorUpdater
};
//# sourceMappingURL=browser-G4DHA7OZ.js.map
