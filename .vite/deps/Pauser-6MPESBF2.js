import {
  ExternalInteractorBase
} from "./chunk-ZQW2U7BW.js";
import "./chunk-N23ELRPB.js";
import "./chunk-CEQRFMJQ.js";

// node_modules/@tsparticles/interaction-external-pause/browser/Pauser.js
var pauseMode = "pause";
var Pauser = class extends ExternalInteractorBase {
  constructor(container) {
    super(container);
    this.handleClickMode = (mode) => {
      if (mode !== pauseMode) {
        return;
      }
      const container2 = this.container;
      if (container2.animationStatus) {
        container2.pause();
      } else {
        container2.play();
      }
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
  reset() {
  }
};
export {
  Pauser
};
//# sourceMappingURL=Pauser-6MPESBF2.js.map
