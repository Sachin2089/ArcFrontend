import "./chunk-CEQRFMJQ.js";

// node_modules/@tsparticles/shape-polygon/browser/index.js
async function loadGenericPolygonShape(engine, refresh = true) {
  const { PolygonDrawer } = await import("./PolygonDrawer-MEKK7WPU.js");
  await engine.addShape("polygon", new PolygonDrawer(), refresh);
}
async function loadTriangleShape(engine, refresh = true) {
  const { TriangleDrawer } = await import("./TriangleDrawer-5VBI6BG5.js");
  await engine.addShape("triangle", new TriangleDrawer(), refresh);
}
async function loadPolygonShape(engine, refresh = true) {
  await loadGenericPolygonShape(engine, refresh);
  await loadTriangleShape(engine, refresh);
}
export {
  loadGenericPolygonShape,
  loadPolygonShape,
  loadTriangleShape
};
//# sourceMappingURL=browser-2HREMI2W.js.map
