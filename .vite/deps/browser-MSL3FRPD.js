import "./chunk-CEQRFMJQ.js";

// node_modules/@tsparticles/updater-rotate/browser/index.js
async function loadRotateUpdater(engine, refresh = true) {
  await engine.addParticleUpdater("rotate", async (container) => {
    const { RotateUpdater } = await import("./RotateUpdater-JCABHZOJ.js");
    return new RotateUpdater(container);
  }, refresh);
}
export {
  loadRotateUpdater
};
//# sourceMappingURL=browser-MSL3FRPD.js.map
