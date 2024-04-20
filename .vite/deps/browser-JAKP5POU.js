import "./chunk-CEQRFMJQ.js";

// node_modules/@tsparticles/updater-out-modes/browser/index.js
async function loadOutModesUpdater(engine, refresh = true) {
  await engine.addParticleUpdater("outModes", async (container) => {
    const { OutOfCanvasUpdater } = await import("./OutOfCanvasUpdater-3A7ZMPCD.js");
    return new OutOfCanvasUpdater(container);
  }, refresh);
}
export {
  loadOutModesUpdater
};
//# sourceMappingURL=browser-JAKP5POU.js.map
