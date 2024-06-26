import {
  OptionsColor
} from "./chunk-N23ELRPB.js";

// node_modules/@tsparticles/interaction-external-grab/browser/Options/Classes/GrabLinks.js
var GrabLinks = class {
  constructor() {
    this.blink = false;
    this.consent = false;
    this.opacity = 1;
  }
  load(data) {
    if (!data) {
      return;
    }
    if (data.blink !== void 0) {
      this.blink = data.blink;
    }
    if (data.color !== void 0) {
      this.color = OptionsColor.create(this.color, data.color);
    }
    if (data.consent !== void 0) {
      this.consent = data.consent;
    }
    if (data.opacity !== void 0) {
      this.opacity = data.opacity;
    }
  }
};

// node_modules/@tsparticles/interaction-external-grab/browser/Options/Classes/Grab.js
var Grab = class {
  constructor() {
    this.distance = 100;
    this.links = new GrabLinks();
  }
  load(data) {
    if (!data) {
      return;
    }
    if (data.distance !== void 0) {
      this.distance = data.distance;
    }
    this.links.load(data.links);
  }
};

export {
  GrabLinks,
  Grab
};
//# sourceMappingURL=chunk-GTWKLM6Y.js.map
