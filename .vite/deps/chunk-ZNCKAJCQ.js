// node_modules/@tsparticles/interaction-external-bounce/browser/Options/Classes/Bounce.js
var Bounce = class {
  constructor() {
    this.distance = 200;
  }
  load(data) {
    if (!data) {
      return;
    }
    if (data.distance !== void 0) {
      this.distance = data.distance;
    }
  }
};

export {
  Bounce
};
//# sourceMappingURL=chunk-ZNCKAJCQ.js.map
