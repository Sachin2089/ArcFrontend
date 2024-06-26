// node_modules/@tsparticles/interaction-external-connect/browser/Options/Classes/ConnectLinks.js
var ConnectLinks = class {
  constructor() {
    this.opacity = 0.5;
  }
  load(data) {
    if (!data) {
      return;
    }
    if (data.opacity !== void 0) {
      this.opacity = data.opacity;
    }
  }
};

// node_modules/@tsparticles/interaction-external-connect/browser/Options/Classes/Connect.js
var Connect = class {
  constructor() {
    this.distance = 80;
    this.links = new ConnectLinks();
    this.radius = 60;
  }
  load(data) {
    if (!data) {
      return;
    }
    if (data.distance !== void 0) {
      this.distance = data.distance;
    }
    this.links.load(data.links);
    if (data.radius !== void 0) {
      this.radius = data.radius;
    }
  }
};

export {
  ConnectLinks,
  Connect
};
//# sourceMappingURL=chunk-CQBCCYH6.js.map
