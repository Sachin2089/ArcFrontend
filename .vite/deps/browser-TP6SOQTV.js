import "./chunk-CEQRFMJQ.js";

// node_modules/@tsparticles/shape-square/browser/index.js
async function loadSquareShape(engine, refresh = true) {
  const { SquareDrawer } = await import("./SquareDrawer-72FZOWYC.js");
  await engine.addShape(["edge", "square"], new SquareDrawer(), refresh);
}
export {
  loadSquareShape
};
//# sourceMappingURL=browser-TP6SOQTV.js.map
