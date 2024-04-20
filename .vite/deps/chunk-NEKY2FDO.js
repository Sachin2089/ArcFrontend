import {
  setRangeValue
} from "./chunk-N23ELRPB.js";

// node_modules/@tsparticles/interaction-external-remove/browser/Options/Classes/Remove.js
var Remove = class {
  constructor() {
    this.quantity = 2;
  }
  load(data) {
    if (!data) {
      return;
    }
    const quantity = data.quantity;
    if (quantity !== void 0) {
      this.quantity = setRangeValue(quantity);
    }
  }
};

export {
  Remove
};
//# sourceMappingURL=chunk-NEKY2FDO.js.map
