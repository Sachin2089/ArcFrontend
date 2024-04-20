import {
  Remove
} from "./chunk-NEKY2FDO.js";
import {
  ExternalInteractorBase
} from "./chunk-ZQW2U7BW.js";
import {
  getRangeValue
} from "./chunk-N23ELRPB.js";
import "./chunk-CEQRFMJQ.js";

// node_modules/@tsparticles/interaction-external-remove/browser/Remover.js
var removeMode = "remove";
var Remover = class extends ExternalInteractorBase {
  constructor(container) {
    super(container);
    this.handleClickMode = (mode) => {
      const container2 = this.container, options = container2.actualOptions;
      if (!options.interactivity.modes.remove || mode !== removeMode) {
        return;
      }
      const removeNb = getRangeValue(options.interactivity.modes.remove.quantity);
      container2.particles.removeQuantity(removeNb);
    };
  }
  clear() {
  }
  init() {
  }
  interact() {
  }
  isEnabled() {
    return true;
  }
  loadModeOptions(options, ...sources) {
    if (!options.remove) {
      options.remove = new Remove();
    }
    for (const source of sources) {
      options.remove.load(source == null ? void 0 : source.remove);
    }
  }
  reset() {
  }
};
export {
  Remover
};
//# sourceMappingURL=Remover-2MQBQS4H.js.map
