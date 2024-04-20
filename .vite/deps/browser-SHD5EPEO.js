import "./chunk-CEQRFMJQ.js";

// node_modules/@tsparticles/shape-line/browser/index.js
async function loadLineShape(engine, refresh = true) {
  const { LineDrawer } = await import("./LineDrawer-CPCBGR4F.js");
  await engine.addShape("line", new LineDrawer(), refresh);
}
export {
  loadLineShape
};
//# sourceMappingURL=browser-SHD5EPEO.js.map
