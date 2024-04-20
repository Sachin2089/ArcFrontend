import "./chunk-CEQRFMJQ.js";

// node_modules/@tsparticles/interaction-external-pause/browser/index.js
async function loadExternalPauseInteraction(engine, refresh = true) {
  await engine.addInteractor("externalPause", async (container) => {
    const { Pauser } = await import("./Pauser-6MPESBF2.js");
    return new Pauser(container);
  }, refresh);
}
export {
  loadExternalPauseInteraction
};
//# sourceMappingURL=browser-IT3PFVPB.js.map
