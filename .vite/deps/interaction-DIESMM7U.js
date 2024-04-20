import "./chunk-CEQRFMJQ.js";

// node_modules/@tsparticles/interaction-particles-links/browser/interaction.js
async function loadLinksInteraction(engine, refresh = true) {
  await engine.addInteractor("particlesLinks", async (container) => {
    const { Linker } = await import("./Linker-IZS6CLOM.js");
    return new Linker(container);
  }, refresh);
}
export {
  loadLinksInteraction
};
//# sourceMappingURL=interaction-DIESMM7U.js.map
