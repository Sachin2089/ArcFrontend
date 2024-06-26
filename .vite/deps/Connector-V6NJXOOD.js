import {
  Connect
} from "./chunk-CQBCCYH6.js";
import {
  ExternalInteractorBase
} from "./chunk-ZQW2U7BW.js";
import {
  clamp,
  colorMix,
  drawLine,
  getStyleFromHsl,
  getStyleFromRgb,
  isInArray
} from "./chunk-N23ELRPB.js";
import "./chunk-CEQRFMJQ.js";

// node_modules/@tsparticles/interaction-external-connect/browser/Utils.js
var gradientMin = 0;
var gradientMax = 1;
var defaultLinksWidth = 0;
function gradient(context, p1, p2, opacity) {
  const gradStop = Math.floor(p2.getRadius() / p1.getRadius()), color1 = p1.getFillColor(), color2 = p2.getFillColor();
  if (!color1 || !color2) {
    return;
  }
  const sourcePos = p1.getPosition(), destPos = p2.getPosition(), midRgb = colorMix(color1, color2, p1.getRadius(), p2.getRadius()), grad = context.createLinearGradient(sourcePos.x, sourcePos.y, destPos.x, destPos.y);
  grad.addColorStop(gradientMin, getStyleFromHsl(color1, opacity));
  grad.addColorStop(clamp(gradStop, gradientMin, gradientMax), getStyleFromRgb(midRgb, opacity));
  grad.addColorStop(gradientMax, getStyleFromHsl(color2, opacity));
  return grad;
}
function drawConnectLine(context, width, lineStyle2, begin, end) {
  drawLine(context, begin, end);
  context.lineWidth = width;
  context.strokeStyle = lineStyle2;
  context.stroke();
}
function lineStyle(container, ctx, p1, p2) {
  const options = container.actualOptions, connectOptions = options.interactivity.modes.connect;
  if (!connectOptions) {
    return;
  }
  return gradient(ctx, p1, p2, connectOptions.links.opacity);
}
function drawConnection(container, p1, p2) {
  container.canvas.draw((ctx) => {
    const ls = lineStyle(container, ctx, p1, p2);
    if (!ls) {
      return;
    }
    const pos1 = p1.getPosition(), pos2 = p2.getPosition();
    drawConnectLine(ctx, p1.retina.linksWidth ?? defaultLinksWidth, ls, pos1, pos2);
  });
}

// node_modules/@tsparticles/interaction-external-connect/browser/Connector.js
var connectMode = "connect";
var minDistance = 0;
var Connector = class extends ExternalInteractorBase {
  constructor(container) {
    super(container);
  }
  clear() {
  }
  init() {
    const container = this.container, connect = container.actualOptions.interactivity.modes.connect;
    if (!connect) {
      return;
    }
    container.retina.connectModeDistance = connect.distance * container.retina.pixelRatio;
    container.retina.connectModeRadius = connect.radius * container.retina.pixelRatio;
  }
  interact() {
    const container = this.container, options = container.actualOptions;
    if (options.interactivity.events.onHover.enable && container.interactivity.status === "pointermove") {
      const mousePos = container.interactivity.mouse.position, { connectModeDistance, connectModeRadius } = container.retina;
      if (!connectModeDistance || connectModeDistance < minDistance || !connectModeRadius || connectModeRadius < minDistance || !mousePos) {
        return;
      }
      const distance = Math.abs(connectModeRadius), query = container.particles.quadTree.queryCircle(mousePos, distance, (p) => this.isEnabled(p));
      query.forEach((p1, i) => {
        const pos1 = p1.getPosition(), indexOffset = 1;
        for (const p2 of query.slice(i + indexOffset)) {
          const pos2 = p2.getPosition(), distMax = Math.abs(connectModeDistance), xDiff = Math.abs(pos1.x - pos2.x), yDiff = Math.abs(pos1.y - pos2.y);
          if (xDiff < distMax && yDiff < distMax) {
            drawConnection(container, p1, p2);
          }
        }
      });
    }
  }
  isEnabled(particle) {
    const container = this.container, mouse = container.interactivity.mouse, events = ((particle == null ? void 0 : particle.interactivity) ?? container.actualOptions.interactivity).events;
    if (!(events.onHover.enable && mouse.position)) {
      return false;
    }
    return isInArray(connectMode, events.onHover.mode);
  }
  loadModeOptions(options, ...sources) {
    if (!options.connect) {
      options.connect = new Connect();
    }
    for (const source of sources) {
      options.connect.load(source == null ? void 0 : source.connect);
    }
  }
  reset() {
  }
};
export {
  Connector
};
//# sourceMappingURL=Connector-V6NJXOOD.js.map
