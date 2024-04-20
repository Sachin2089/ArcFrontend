import "./chunk-CEQRFMJQ.js";

// node_modules/@tsparticles/interaction-particles-collisions/browser/index.js
async function loadParticlesCollisionsInteraction(engine, refresh = true) {
  await engine.addInteractor("particlesCollisions", async (container) => {
    const { Collider } = await import("./Collider-6OSMXI4Z.js");
    return new Collider(container);
  }, refresh);
}
export {
  loadParticlesCollisionsInteraction
};
//# sourceMappingURL=browser-YGOSCW4A.js.map
