import "./chunk-CEQRFMJQ.js";

// node_modules/@tsparticles/updater-opacity/browser/index.js
async function loadOpacityUpdater(engine, refresh = true) {
  await engine.addParticleUpdater("opacity", async (container) => {
    const { OpacityUpdater } = await import("./OpacityUpdater-TE4AHO47.js");
    return new OpacityUpdater(container);
  }, refresh);
}
export {
  loadOpacityUpdater
};
//# sourceMappingURL=browser-MMBCQRHD.js.map
