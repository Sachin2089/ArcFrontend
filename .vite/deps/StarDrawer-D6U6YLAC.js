import "./chunk-ZQW2U7BW.js";
import {
  getRangeValue
} from "./chunk-N23ELRPB.js";
import "./chunk-CEQRFMJQ.js";

// node_modules/@tsparticles/shape-star/browser/Utils.js
var defaultInset = 2;
var origin = { x: 0, y: 0 };
function drawStar(data) {
  const { context, particle, radius } = data, sides = particle.sides, inset = particle.starInset ?? defaultInset;
  context.moveTo(origin.x, origin.y - radius);
  for (let i = 0; i < sides; i++) {
    context.rotate(Math.PI / sides);
    context.lineTo(origin.x, origin.y - radius * inset);
    context.rotate(Math.PI / sides);
    context.lineTo(origin.x, origin.y - radius);
  }
}

// node_modules/@tsparticles/shape-star/browser/StarDrawer.js
var defaultInset2 = 2;
var defaultSides = 5;
var StarDrawer = class {
  draw(data) {
    drawStar(data);
  }
  getSidesCount(particle) {
    const star = particle.shapeData;
    return Math.round(getRangeValue((star == null ? void 0 : star.sides) ?? defaultSides));
  }
  particleInit(container, particle) {
    const star = particle.shapeData;
    particle.starInset = getRangeValue((star == null ? void 0 : star.inset) ?? defaultInset2);
  }
};
export {
  StarDrawer
};
//# sourceMappingURL=StarDrawer-D6U6YLAC.js.map
