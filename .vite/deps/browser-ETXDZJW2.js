import "./chunk-CEQRFMJQ.js";

// node_modules/@tsparticles/move-parallax/browser/index.js
async function loadParallaxMover(engine, refresh = true) {
  await engine.addMover("parallax", async () => {
    const { ParallaxMover } = await import("./ParallaxMover-QFMMC3I3.js");
    return new ParallaxMover();
  }, refresh);
}
export {
  loadParallaxMover
};
//# sourceMappingURL=browser-ETXDZJW2.js.map
