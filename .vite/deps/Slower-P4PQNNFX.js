import {
  Slow
} from "./chunk-WDCMM45Z.js";
import {
  ExternalInteractorBase
} from "./chunk-ZQW2U7BW.js";
import {
  getDistance,
  isInArray
} from "./chunk-N23ELRPB.js";
import "./chunk-CEQRFMJQ.js";

// node_modules/@tsparticles/interaction-external-slow/browser/Slower.js
var slowMode = "slow";
var minRadius = 0;
var Slower = class extends ExternalInteractorBase {
  constructor(container) {
    super(container);
  }
  clear(particle, delta, force) {
    if (particle.slow.inRange && !force) {
      return;
    }
    particle.slow.factor = 1;
  }
  init() {
    const container = this.container, slow = container.actualOptions.interactivity.modes.slow;
    if (!slow) {
      return;
    }
    container.retina.slowModeRadius = slow.radius * container.retina.pixelRatio;
  }
  interact() {
  }
  isEnabled(particle) {
    const container = this.container, mouse = container.interactivity.mouse, events = ((particle == null ? void 0 : particle.interactivity) ?? container.actualOptions.interactivity).events;
    return events.onHover.enable && !!mouse.position && isInArray(slowMode, events.onHover.mode);
  }
  loadModeOptions(options, ...sources) {
    if (!options.slow) {
      options.slow = new Slow();
    }
    for (const source of sources) {
      options.slow.load(source == null ? void 0 : source.slow);
    }
  }
  reset(particle) {
    particle.slow.inRange = false;
    const container = this.container, options = container.actualOptions, mousePos = container.interactivity.mouse.position, radius = container.retina.slowModeRadius, slowOptions = options.interactivity.modes.slow;
    if (!slowOptions || !radius || radius < minRadius || !mousePos) {
      return;
    }
    const particlePos = particle.getPosition(), dist = getDistance(mousePos, particlePos), proximityFactor = dist / radius, slowFactor = slowOptions.factor, { slow } = particle;
    if (dist > radius) {
      return;
    }
    slow.inRange = true;
    slow.factor = proximityFactor / slowFactor;
  }
};
export {
  Slower
};
//# sourceMappingURL=Slower-P4PQNNFX.js.map
