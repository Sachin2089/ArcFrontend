import "./chunk-CEQRFMJQ.js";

// node_modules/@tsparticles/shape-square/browser/Utils.js
var fixFactorSquared = 2;
var fixFactor = Math.sqrt(fixFactorSquared);
var double = 2;
function drawSquare(data) {
  const { context, radius } = data, fixedRadius = radius / fixFactor, fixedDiameter = fixedRadius * double;
  context.rect(-fixedRadius, -fixedRadius, fixedDiameter, fixedDiameter);
}

// node_modules/@tsparticles/shape-square/browser/SquareDrawer.js
var sides = 4;
var SquareDrawer = class {
  draw(data) {
    drawSquare(data);
  }
  getSidesCount() {
    return sides;
  }
};
export {
  SquareDrawer
};
//# sourceMappingURL=SquareDrawer-72FZOWYC.js.map
