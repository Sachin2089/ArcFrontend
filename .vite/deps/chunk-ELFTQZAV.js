import {
  degToRad,
  getRangeValue
} from "./chunk-N23ELRPB.js";

// node_modules/@tsparticles/shape-polygon/browser/Utils.js
var piDeg = 180;
var origin = { x: 0, y: 0 };
var sidesOffset = 2;
function drawPolygon(data, start, side) {
  const { context } = data, sideCount = side.count.numerator * side.count.denominator, decimalSides = side.count.numerator / side.count.denominator, interiorAngleDegrees = piDeg * (decimalSides - sidesOffset) / decimalSides, interiorAngle = Math.PI - degToRad(interiorAngleDegrees);
  if (!context) {
    return;
  }
  context.beginPath();
  context.translate(start.x, start.y);
  context.moveTo(origin.x, origin.y);
  for (let i = 0; i < sideCount; i++) {
    context.lineTo(side.length, origin.y);
    context.translate(side.length, origin.y);
    context.rotate(interiorAngle);
  }
}

// node_modules/@tsparticles/shape-polygon/browser/PolygonDrawerBase.js
var defaultSides = 5;
var PolygonDrawerBase = class {
  draw(data) {
    const { particle, radius } = data, start = this.getCenter(particle, radius), side = this.getSidesData(particle, radius);
    drawPolygon(data, start, side);
  }
  getSidesCount(particle) {
    const polygon = particle.shapeData;
    return Math.round(getRangeValue((polygon == null ? void 0 : polygon.sides) ?? defaultSides));
  }
};

export {
  PolygonDrawerBase
};
//# sourceMappingURL=chunk-ELFTQZAV.js.map
