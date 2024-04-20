import "./chunk-CEQRFMJQ.js";

// node_modules/@tsparticles/shape-line/browser/Utils.js
function drawLine(data) {
  const { context, particle, radius } = data, shapeData = particle.shapeData, centerY = 0;
  context.moveTo(-radius, centerY);
  context.lineTo(radius, centerY);
  context.lineCap = (shapeData == null ? void 0 : shapeData.cap) ?? "butt";
}

// node_modules/@tsparticles/shape-line/browser/LineDrawer.js
var sides = 1;
var LineDrawer = class {
  draw(data) {
    drawLine(data);
  }
  getSidesCount() {
    return sides;
  }
};
export {
  LineDrawer
};
//# sourceMappingURL=LineDrawer-CPCBGR4F.js.map
