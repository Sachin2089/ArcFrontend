import "./chunk-CEQRFMJQ.js";

// node_modules/@tsparticles/shape-star/browser/index.js
async function loadStarShape(engine, refresh = true) {
  const { StarDrawer } = await import("./StarDrawer-D6U6YLAC.js");
  await engine.addShape("star", new StarDrawer(), refresh);
}
export {
  loadStarShape
};
//# sourceMappingURL=browser-DAYWGFXK.js.map
