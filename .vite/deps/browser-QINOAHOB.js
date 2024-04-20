import "./chunk-CEQRFMJQ.js";

// node_modules/@tsparticles/interaction-particles-attract/browser/index.js
async function loadParticlesAttractInteraction(engine, refresh = true) {
  await engine.addInteractor("particlesAttract", async (container) => {
    const { Attractor } = await import("./Attractor-CXJ7KTVK.js");
    return new Attractor(container);
  }, refresh);
}
export {
  loadParticlesAttractInteraction
};
//# sourceMappingURL=browser-QINOAHOB.js.map
