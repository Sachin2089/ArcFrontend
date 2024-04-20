// node_modules/@tsparticles/interaction-external-slow/browser/Options/Classes/Slow.js
var Slow = class {
  constructor() {
    this.factor = 3;
    this.radius = 200;
  }
  load(data) {
    if (!data) {
      return;
    }
    if (data.factor !== void 0) {
      this.factor = data.factor;
    }
    if (data.radius !== void 0) {
      this.radius = data.radius;
    }
  }
};

export {
  Slow
};
//# sourceMappingURL=chunk-WDCMM45Z.js.map
