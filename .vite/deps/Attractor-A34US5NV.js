import {
  Attract
} from "./chunk-IRRU4MCF.js";
import {
  ExternalInteractorBase
} from "./chunk-ZQW2U7BW.js";
import {
  Circle,
  Vector,
  clamp,
  getDistances,
  getEasing,
  isInArray,
  millisecondsToSeconds,
  mouseMoveEvent
} from "./chunk-N23ELRPB.js";
import "./chunk-CEQRFMJQ.js";

// node_modules/@tsparticles/interaction-external-attract/browser/Utils.js
var minFactor = 1;
var identity = 1;
var minRadius = 0;
function processAttract(container, position, attractRadius, area, queryCb) {
  const attractOptions = container.actualOptions.interactivity.modes.attract;
  if (!attractOptions) {
    return;
  }
  const query = container.particles.quadTree.query(area, queryCb);
  for (const particle of query) {
    const { dx, dy, distance } = getDistances(particle.position, position), velocity = attractOptions.speed * attractOptions.factor, attractFactor = clamp(getEasing(attractOptions.easing)(identity - distance / attractRadius) * velocity, minFactor, attractOptions.maxSpeed), normVec = Vector.create(!distance ? velocity : dx / distance * attractFactor, !distance ? velocity : dy / distance * attractFactor);
    particle.position.subFrom(normVec);
  }
}
function clickAttract(container, enabledCb) {
  if (!container.attract) {
    container.attract = { particles: [] };
  }
  const { attract } = container;
  if (!attract.finish) {
    if (!attract.count) {
      attract.count = 0;
    }
    attract.count++;
    if (attract.count === container.particles.count) {
      attract.finish = true;
    }
  }
  if (attract.clicking) {
    const mousePos = container.interactivity.mouse.clickPosition, attractRadius = container.retina.attractModeDistance;
    if (!attractRadius || attractRadius < minRadius || !mousePos) {
      return;
    }
    processAttract(container, mousePos, attractRadius, new Circle(mousePos.x, mousePos.y, attractRadius), (p) => enabledCb(p));
  } else if (attract.clicking === false) {
    attract.particles = [];
  }
}
function hoverAttract(container, enabledCb) {
  const mousePos = container.interactivity.mouse.position, attractRadius = container.retina.attractModeDistance;
  if (!attractRadius || attractRadius < minRadius || !mousePos) {
    return;
  }
  processAttract(container, mousePos, attractRadius, new Circle(mousePos.x, mousePos.y, attractRadius), (p) => enabledCb(p));
}

// node_modules/@tsparticles/interaction-external-attract/browser/Attractor.js
var attractMode = "attract";
var Attractor = class extends ExternalInteractorBase {
  constructor(engine, container) {
    super(container);
    this._engine = engine;
    if (!container.attract) {
      container.attract = { particles: [] };
    }
    this.handleClickMode = (mode) => {
      const options = this.container.actualOptions, attract = options.interactivity.modes.attract;
      if (!attract || mode !== attractMode) {
        return;
      }
      if (!container.attract) {
        container.attract = { particles: [] };
      }
      container.attract.clicking = true;
      container.attract.count = 0;
      for (const particle of container.attract.particles) {
        if (!this.isEnabled(particle)) {
          continue;
        }
        particle.velocity.setTo(particle.initialVelocity);
      }
      container.attract.particles = [];
      container.attract.finish = false;
      setTimeout(() => {
        if (container.destroyed) {
          return;
        }
        if (!container.attract) {
          container.attract = { particles: [] };
        }
        container.attract.clicking = false;
      }, attract.duration * millisecondsToSeconds);
    };
  }
  clear() {
  }
  init() {
    const container = this.container, attract = container.actualOptions.interactivity.modes.attract;
    if (!attract) {
      return;
    }
    container.retina.attractModeDistance = attract.distance * container.retina.pixelRatio;
  }
  interact() {
    const container = this.container, options = container.actualOptions, mouseMoveStatus = container.interactivity.status === mouseMoveEvent, events = options.interactivity.events, { enable: hoverEnabled, mode: hoverMode } = events.onHover, { enable: clickEnabled, mode: clickMode } = events.onClick;
    if (mouseMoveStatus && hoverEnabled && isInArray(attractMode, hoverMode)) {
      hoverAttract(this.container, (p) => this.isEnabled(p));
    } else if (clickEnabled && isInArray(attractMode, clickMode)) {
      clickAttract(this.container, (p) => this.isEnabled(p));
    }
  }
  isEnabled(particle) {
    const container = this.container, options = container.actualOptions, mouse = container.interactivity.mouse, events = ((particle == null ? void 0 : particle.interactivity) ?? options.interactivity).events;
    if ((!mouse.position || !events.onHover.enable) && (!mouse.clickPosition || !events.onClick.enable)) {
      return false;
    }
    const hoverMode = events.onHover.mode, clickMode = events.onClick.mode;
    return isInArray(attractMode, hoverMode) || isInArray(attractMode, clickMode);
  }
  loadModeOptions(options, ...sources) {
    if (!options.attract) {
      options.attract = new Attract();
    }
    for (const source of sources) {
      options.attract.load(source == null ? void 0 : source.attract);
    }
  }
  reset() {
  }
};
export {
  Attractor
};
//# sourceMappingURL=Attractor-A34US5NV.js.map
