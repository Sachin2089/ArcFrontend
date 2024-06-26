import {
  Bounce
} from "./chunk-ZNCKAJCQ.js";
import {
  ExternalInteractorBase
} from "./chunk-ZQW2U7BW.js";
import {
  Circle,
  Rectangle,
  Vector,
  calculateBounds,
  circleBounce,
  circleBounceDataFromParticle,
  divModeExecute,
  isDivModeEnabled,
  isInArray,
  mouseMoveEvent,
  rectBounce
} from "./chunk-N23ELRPB.js";
import "./chunk-CEQRFMJQ.js";

// node_modules/@tsparticles/interaction-external-bounce/browser/Utils.js
var squareExp = 2;
var half = 0.5;
var halfPI = Math.PI * half;
var double = 2;
var toleranceFactor = 10;
var minRadius = 0;
function processBounce(container, position, radius, area, enabledCb) {
  const query = container.particles.quadTree.query(area, enabledCb);
  for (const particle of query) {
    if (area instanceof Circle) {
      circleBounce(circleBounceDataFromParticle(particle), {
        position,
        radius,
        mass: radius ** squareExp * halfPI,
        velocity: Vector.origin,
        factor: Vector.origin
      });
    } else if (area instanceof Rectangle) {
      rectBounce(particle, calculateBounds(position, radius));
    }
  }
}
function singleSelectorBounce(container, selector, div, bounceCb) {
  const query = document.querySelectorAll(selector);
  if (!query.length) {
    return;
  }
  query.forEach((item) => {
    const elem = item, pxRatio = container.retina.pixelRatio, pos = {
      x: (elem.offsetLeft + elem.offsetWidth * half) * pxRatio,
      y: (elem.offsetTop + elem.offsetHeight * half) * pxRatio
    }, radius = elem.offsetWidth * half * pxRatio, tolerance = toleranceFactor * pxRatio, area = div.type === "circle" ? new Circle(pos.x, pos.y, radius + tolerance) : new Rectangle(elem.offsetLeft * pxRatio - tolerance, elem.offsetTop * pxRatio - tolerance, elem.offsetWidth * pxRatio + tolerance * double, elem.offsetHeight * pxRatio + tolerance * double);
    bounceCb(pos, radius, area);
  });
}
function divBounce(container, divs, bounceMode2, enabledCb) {
  divModeExecute(bounceMode2, divs, (selector, div) => singleSelectorBounce(container, selector, div, (pos, radius, area) => processBounce(container, pos, radius, area, enabledCb)));
}
function mouseBounce(container, enabledCb) {
  const pxRatio = container.retina.pixelRatio, tolerance = toleranceFactor * pxRatio, mousePos = container.interactivity.mouse.position, radius = container.retina.bounceModeDistance;
  if (!radius || radius < minRadius || !mousePos) {
    return;
  }
  processBounce(container, mousePos, radius, new Circle(mousePos.x, mousePos.y, radius + tolerance), enabledCb);
}

// node_modules/@tsparticles/interaction-external-bounce/browser/Bouncer.js
var bounceMode = "bounce";
var Bouncer = class extends ExternalInteractorBase {
  constructor(container) {
    super(container);
  }
  clear() {
  }
  init() {
    const container = this.container, bounce = container.actualOptions.interactivity.modes.bounce;
    if (!bounce) {
      return;
    }
    container.retina.bounceModeDistance = bounce.distance * container.retina.pixelRatio;
  }
  interact() {
    const container = this.container, options = container.actualOptions, events = options.interactivity.events, mouseMoveStatus = container.interactivity.status === mouseMoveEvent, hoverEnabled = events.onHover.enable, hoverMode = events.onHover.mode, divs = events.onDiv;
    if (mouseMoveStatus && hoverEnabled && isInArray(bounceMode, hoverMode)) {
      mouseBounce(this.container, (p) => this.isEnabled(p));
    } else {
      divBounce(this.container, divs, bounceMode, (p) => this.isEnabled(p));
    }
  }
  isEnabled(particle) {
    const container = this.container, options = container.actualOptions, mouse = container.interactivity.mouse, events = ((particle == null ? void 0 : particle.interactivity) ?? options.interactivity).events, divs = events.onDiv;
    return !!mouse.position && events.onHover.enable && isInArray(bounceMode, events.onHover.mode) || isDivModeEnabled(bounceMode, divs);
  }
  loadModeOptions(options, ...sources) {
    if (!options.bounce) {
      options.bounce = new Bounce();
    }
    for (const source of sources) {
      options.bounce.load(source == null ? void 0 : source.bounce);
    }
  }
  reset() {
  }
};
export {
  Bouncer
};
//# sourceMappingURL=Bouncer-LLIJOBSR.js.map
