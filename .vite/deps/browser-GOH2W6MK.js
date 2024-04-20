import "./chunk-CEQRFMJQ.js";

// node_modules/@tsparticles/updater-life/browser/index.js
async function loadLifeUpdater(engine, refresh = true) {
  await engine.addParticleUpdater("life", async (container) => {
    const { LifeUpdater } = await import("./LifeUpdater-6O65PBIZ.js");
    return new LifeUpdater(container);
  }, refresh);
}
export {
  loadLifeUpdater
};
//# sourceMappingURL=browser-GOH2W6MK.js.map
