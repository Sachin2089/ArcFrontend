import "./chunk-CEQRFMJQ.js";

// node_modules/@tsparticles/move-base/browser/index.js
async function loadBaseMover(engine, refresh = true) {
  await engine.addMover("base", async () => {
    const { BaseMover } = await import("./BaseMover-7D4D2THX.js");
    return new BaseMover();
  }, refresh);
}
export {
  loadBaseMover
};
//# sourceMappingURL=browser-LOUAKAEQ.js.map
