import {
  PolygonDrawerBase
} from "./chunk-ELFTQZAV.js";
import "./chunk-ZQW2U7BW.js";
import "./chunk-N23ELRPB.js";
import "./chunk-CEQRFMJQ.js";

// node_modules/@tsparticles/shape-polygon/browser/TriangleDrawer.js
var yFactor = 1.66;
var sides = 3;
var double = 2;
var TriangleDrawer = class extends PolygonDrawerBase {
  getCenter(particle, radius) {
    return {
      x: -radius,
      y: radius / yFactor
    };
  }
  getSidesCount() {
    return sides;
  }
  getSidesData(particle, radius) {
    const diameter = radius * double;
    return {
      count: {
        denominator: 2,
        numerator: 3
      },
      length: diameter
    };
  }
};
export {
  TriangleDrawer
};
//# sourceMappingURL=TriangleDrawer-5VBI6BG5.js.map
