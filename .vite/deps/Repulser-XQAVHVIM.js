import {
  Repulse
} from "./chunk-2YEYMQ7W.js";
import {
  ExternalInteractorBase
} from "./chunk-ZQW2U7BW.js";
import {
  Circle,
  Rectangle,
  Vector,
  clamp,
  divMode,
  divModeExecute,
  getDistances,
  getEasing,
  isDivModeEnabled,
  isInArray,
  millisecondsToSeconds,
  mouseMoveEvent
} from "./chunk-N23ELRPB.js";
import "./chunk-CEQRFMJQ.js";

// node_modules/@tsparticles/interaction-external-repulse/browser/Repulser.js
var repulseMode = "repulse";
var minDistance = 0;
var repulseRadiusFactor = 6;
var repulseRadiusPower = 3;
var squarePower = 2;
var minRadius = 0;
var minSpeed = 0;
var easingOffset = 1;
var half = 0.5;
var Repulser = class extends ExternalInteractorBase {
  constructor(engine, container) {
    super(container);
    this._clickRepulse = () => {
      const container2 = this.container, repulseOptions = container2.actualOptions.interactivity.modes.repulse;
      if (!repulseOptions) {
        return;
      }
      const repulse = container2.repulse ?? { particles: [] };
      if (!repulse.finish) {
        if (!repulse.count) {
          repulse.count = 0;
        }
        repulse.count++;
        if (repulse.count === container2.particles.count) {
          repulse.finish = true;
        }
      }
      if (repulse.clicking) {
        const repulseDistance = container2.retina.repulseModeDistance;
        if (!repulseDistance || repulseDistance < minDistance) {
          return;
        }
        const repulseRadius = Math.pow(repulseDistance / repulseRadiusFactor, repulseRadiusPower), mouseClickPos = container2.interactivity.mouse.clickPosition;
        if (mouseClickPos === void 0) {
          return;
        }
        const range = new Circle(mouseClickPos.x, mouseClickPos.y, repulseRadius), query = container2.particles.quadTree.query(range, (p) => this.isEnabled(p));
        for (const particle of query) {
          const { dx, dy, distance } = getDistances(mouseClickPos, particle.position), d = distance ** squarePower, velocity = repulseOptions.speed, force = -repulseRadius * velocity / d;
          if (d <= repulseRadius) {
            repulse.particles.push(particle);
            const vect = Vector.create(dx, dy);
            vect.length = force;
            particle.velocity.setTo(vect);
          }
        }
      } else if (repulse.clicking === false) {
        for (const particle of repulse.particles) {
          particle.velocity.setTo(particle.initialVelocity);
        }
        repulse.particles = [];
      }
    };
    this._hoverRepulse = () => {
      const container2 = this.container, mousePos = container2.interactivity.mouse.position, repulseRadius = container2.retina.repulseModeDistance;
      if (!repulseRadius || repulseRadius < minRadius || !mousePos) {
        return;
      }
      this._processRepulse(mousePos, repulseRadius, new Circle(mousePos.x, mousePos.y, repulseRadius));
    };
    this._processRepulse = (position, repulseRadius, area, divRepulse) => {
      const container2 = this.container, query = container2.particles.quadTree.query(area, (p) => this.isEnabled(p)), repulseOptions = container2.actualOptions.interactivity.modes.repulse;
      if (!repulseOptions) {
        return;
      }
      const { easing, speed, factor, maxSpeed } = repulseOptions, easingFunc = getEasing(easing), velocity = ((divRepulse == null ? void 0 : divRepulse.speed) ?? speed) * factor;
      for (const particle of query) {
        const { dx, dy, distance } = getDistances(particle.position, position), repulseFactor = clamp(easingFunc(easingOffset - distance / repulseRadius) * velocity, minSpeed, maxSpeed), normVec = Vector.create(!distance ? velocity : dx / distance * repulseFactor, !distance ? velocity : dy / distance * repulseFactor);
        particle.position.addTo(normVec);
      }
    };
    this._singleSelectorRepulse = (selector, div) => {
      const container2 = this.container, repulse = container2.actualOptions.interactivity.modes.repulse;
      if (!repulse) {
        return;
      }
      const query = document.querySelectorAll(selector);
      if (!query.length) {
        return;
      }
      query.forEach((item) => {
        const elem = item, pxRatio = container2.retina.pixelRatio, pos = {
          x: (elem.offsetLeft + elem.offsetWidth * half) * pxRatio,
          y: (elem.offsetTop + elem.offsetHeight * half) * pxRatio
        }, repulseRadius = elem.offsetWidth * half * pxRatio, area = div.type === "circle" ? new Circle(pos.x, pos.y, repulseRadius) : new Rectangle(elem.offsetLeft * pxRatio, elem.offsetTop * pxRatio, elem.offsetWidth * pxRatio, elem.offsetHeight * pxRatio), divs = repulse.divs, divRepulse = divMode(divs, elem);
        this._processRepulse(pos, repulseRadius, area, divRepulse);
      });
    };
    this._engine = engine;
    if (!container.repulse) {
      container.repulse = { particles: [] };
    }
    this.handleClickMode = (mode) => {
      const options = this.container.actualOptions, repulseOpts = options.interactivity.modes.repulse;
      if (!repulseOpts || mode !== repulseMode) {
        return;
      }
      if (!container.repulse) {
        container.repulse = { particles: [] };
      }
      const repulse = container.repulse;
      repulse.clicking = true;
      repulse.count = 0;
      for (const particle of container.repulse.particles) {
        if (!this.isEnabled(particle)) {
          continue;
        }
        particle.velocity.setTo(particle.initialVelocity);
      }
      repulse.particles = [];
      repulse.finish = false;
      setTimeout(() => {
        if (container.destroyed) {
          return;
        }
        repulse.clicking = false;
      }, repulseOpts.duration * millisecondsToSeconds);
    };
  }
  clear() {
  }
  init() {
    const container = this.container, repulse = container.actualOptions.interactivity.modes.repulse;
    if (!repulse) {
      return;
    }
    container.retina.repulseModeDistance = repulse.distance * container.retina.pixelRatio;
  }
  interact() {
    const container = this.container, options = container.actualOptions, mouseMoveStatus = container.interactivity.status === mouseMoveEvent, events = options.interactivity.events, hover = events.onHover, hoverEnabled = hover.enable, hoverMode = hover.mode, click = events.onClick, clickEnabled = click.enable, clickMode = click.mode, divs = events.onDiv;
    if (mouseMoveStatus && hoverEnabled && isInArray(repulseMode, hoverMode)) {
      this._hoverRepulse();
    } else if (clickEnabled && isInArray(repulseMode, clickMode)) {
      this._clickRepulse();
    } else {
      divModeExecute(repulseMode, divs, (selector, div) => this._singleSelectorRepulse(selector, div));
    }
  }
  isEnabled(particle) {
    const container = this.container, options = container.actualOptions, mouse = container.interactivity.mouse, events = ((particle == null ? void 0 : particle.interactivity) ?? options.interactivity).events, divs = events.onDiv, hover = events.onHover, click = events.onClick, divRepulse = isDivModeEnabled(repulseMode, divs);
    if (!(divRepulse || hover.enable && !!mouse.position || click.enable && mouse.clickPosition)) {
      return false;
    }
    const hoverMode = hover.mode, clickMode = click.mode;
    return isInArray(repulseMode, hoverMode) || isInArray(repulseMode, clickMode) || divRepulse;
  }
  loadModeOptions(options, ...sources) {
    if (!options.repulse) {
      options.repulse = new Repulse();
    }
    for (const source of sources) {
      options.repulse.load(source == null ? void 0 : source.repulse);
    }
  }
  reset() {
  }
};
export {
  Repulser
};
//# sourceMappingURL=Repulser-XQAVHVIM.js.map
