import "./chunk-CEQRFMJQ.js";

// node_modules/@tsparticles/basic/browser/index.js
async function loadBasic(engine, refresh = true) {
  const { loadBaseMover } = await import("./browser-LOUAKAEQ.js"), { loadCircleShape } = await import("./browser-AMXCV2BE.js"), { loadColorUpdater } = await import("./browser-2KZIJBXQ.js"), { loadOpacityUpdater } = await import("./browser-MMBCQRHD.js"), { loadOutModesUpdater } = await import("./browser-JAKP5POU.js"), { loadSizeUpdater } = await import("./browser-ZVVJLCZK.js");
  await loadBaseMover(engine, false);
  await loadCircleShape(engine, false);
  await loadColorUpdater(engine, false);
  await loadOpacityUpdater(engine, false);
  await loadOutModesUpdater(engine, false);
  await loadSizeUpdater(engine, false);
  await engine.refresh(refresh);
}
export {
  loadBasic
};
//# sourceMappingURL=browser-KT6LU4WO.js.map
