import {
  PolygonDrawerBase
} from "./chunk-ELFTQZAV.js";
import "./chunk-ZQW2U7BW.js";
import "./chunk-N23ELRPB.js";
import "./chunk-CEQRFMJQ.js";

// node_modules/@tsparticles/shape-polygon/browser/PolygonDrawer.js
var sidesCenterFactor = 3.5;
var yFactor = 2.66;
var sidesFactor = 3;
var PolygonDrawer = class extends PolygonDrawerBase {
  getCenter(particle, radius) {
    return {
      x: -radius / (particle.sides / sidesCenterFactor),
      y: -radius / (yFactor / sidesCenterFactor)
    };
  }
  getSidesData(particle, radius) {
    const sides = particle.sides;
    return {
      count: {
        denominator: 1,
        numerator: sides
      },
      length: radius * yFactor / (sides / sidesFactor)
    };
  }
};
export {
  PolygonDrawer
};
//# sourceMappingURL=PolygonDrawer-MEKK7WPU.js.map
