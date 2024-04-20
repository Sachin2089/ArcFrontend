import "./chunk-CEQRFMJQ.js";

// node_modules/@tsparticles/updater-size/browser/index.js
async function loadSizeUpdater(engine, refresh = true) {
  await engine.addParticleUpdater("size", async () => {
    const { SizeUpdater } = await import("./SizeUpdater-Y4AF4RMP.js");
    return new SizeUpdater();
  }, refresh);
}
export {
  loadSizeUpdater
};
//# sourceMappingURL=browser-ZVVJLCZK.js.map
