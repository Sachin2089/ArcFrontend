import {
  ParticlesInteractorBase
} from "./chunk-ZQW2U7BW.js";
import {
  circleBounce,
  circleBounceDataFromParticle,
  clamp,
  getDistance,
  getRangeValue
} from "./chunk-N23ELRPB.js";
import "./chunk-CEQRFMJQ.js";

// node_modules/@tsparticles/interaction-particles-collisions/browser/Absorb.js
var half = 0.5;
var absorbFactor = 10;
var minAbsorbFactor = 0;
function updateAbsorb(p1, r1, p2, r2, delta, pixelRatio) {
  const factor = clamp(p1.options.collisions.absorb.speed * delta.factor / absorbFactor, minAbsorbFactor, r2);
  p1.size.value += factor * half;
  p2.size.value -= factor;
  if (r2 <= pixelRatio) {
    p2.size.value = 0;
    p2.destroy();
  }
}
function absorb(p1, p2, delta, pixelRatio) {
  const r1 = p1.getRadius(), r2 = p2.getRadius();
  if (r1 === void 0 && r2 !== void 0) {
    p1.destroy();
  } else if (r1 !== void 0 && r2 === void 0) {
    p2.destroy();
  } else if (r1 !== void 0 && r2 !== void 0) {
    if (r1 >= r2) {
      updateAbsorb(p1, r1, p2, r2, delta, pixelRatio);
    } else {
      updateAbsorb(p2, r2, p1, r1, delta, pixelRatio);
    }
  }
}

// node_modules/@tsparticles/interaction-particles-collisions/browser/Bounce.js
var fixBounceSpeed = (p) => {
  if (p.collisionMaxSpeed === void 0) {
    p.collisionMaxSpeed = getRangeValue(p.options.collisions.maxSpeed);
  }
  if (p.velocity.length > p.collisionMaxSpeed) {
    p.velocity.length = p.collisionMaxSpeed;
  }
};
function bounce(p1, p2) {
  circleBounce(circleBounceDataFromParticle(p1), circleBounceDataFromParticle(p2));
  fixBounceSpeed(p1);
  fixBounceSpeed(p2);
}

// node_modules/@tsparticles/interaction-particles-collisions/browser/Destroy.js
function destroy(p1, p2) {
  if (!p1.unbreakable && !p2.unbreakable) {
    bounce(p1, p2);
  }
  if (p1.getRadius() === void 0 && p2.getRadius() !== void 0) {
    p1.destroy();
  } else if (p1.getRadius() !== void 0 && p2.getRadius() === void 0) {
    p2.destroy();
  } else if (p1.getRadius() !== void 0 && p2.getRadius() !== void 0) {
    const deleteP = p1.getRadius() >= p2.getRadius() ? p2 : p1;
    deleteP.destroy();
  }
}

// node_modules/@tsparticles/interaction-particles-collisions/browser/ResolveCollision.js
function resolveCollision(p1, p2, delta, pixelRatio) {
  switch (p1.options.collisions.mode) {
    case "absorb": {
      absorb(p1, p2, delta, pixelRatio);
      break;
    }
    case "bounce": {
      bounce(p1, p2);
      break;
    }
    case "destroy": {
      destroy(p1, p2);
      break;
    }
  }
}

// node_modules/@tsparticles/interaction-particles-collisions/browser/Collider.js
var double = 2;
var Collider = class extends ParticlesInteractorBase {
  constructor(container) {
    super(container);
  }
  clear() {
  }
  init() {
  }
  interact(p1, delta) {
    if (p1.destroyed || p1.spawning) {
      return;
    }
    const container = this.container, pos1 = p1.getPosition(), radius1 = p1.getRadius(), query = container.particles.quadTree.queryCircle(pos1, radius1 * double);
    for (const p2 of query) {
      if (p1 === p2 || !p2.options.collisions.enable || p1.options.collisions.mode !== p2.options.collisions.mode || p2.destroyed || p2.spawning) {
        continue;
      }
      const pos2 = p2.getPosition(), radius2 = p2.getRadius();
      if (Math.abs(Math.round(pos1.z) - Math.round(pos2.z)) > radius1 + radius2) {
        continue;
      }
      const dist = getDistance(pos1, pos2), distP = radius1 + radius2;
      if (dist > distP) {
        continue;
      }
      resolveCollision(p1, p2, delta, container.retina.pixelRatio);
    }
  }
  isEnabled(particle) {
    return particle.options.collisions.enable;
  }
  reset() {
  }
};
export {
  Collider
};
//# sourceMappingURL=Collider-6OSMXI4Z.js.map
