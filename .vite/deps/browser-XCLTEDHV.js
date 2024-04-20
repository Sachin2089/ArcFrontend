import {
  Connect,
  ConnectLinks
} from "./chunk-CQBCCYH6.js";
import "./chunk-CEQRFMJQ.js";

// node_modules/@tsparticles/interaction-external-connect/browser/index.js
async function loadExternalConnectInteraction(engine, refresh = true) {
  await engine.addInteractor("externalConnect", async (container) => {
    const { Connector } = await import("./Connector-V6NJXOOD.js");
    return new Connector(container);
  }, refresh);
}
export {
  Connect,
  ConnectLinks,
  loadExternalConnectInteraction
};
//# sourceMappingURL=browser-XCLTEDHV.js.map
