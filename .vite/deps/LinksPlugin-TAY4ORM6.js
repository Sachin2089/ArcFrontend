import "./chunk-CEQRFMJQ.js";

// node_modules/@tsparticles/interaction-particles-links/browser/LinksPlugin.js
var LinksPlugin = class {
  constructor() {
    this.id = "links";
  }
  async getPlugin(container) {
    const { LinkInstance } = await import("./LinkInstance-RSSK7JPN.js");
    return new LinkInstance(container);
  }
  loadOptions() {
  }
  needsPlugin() {
    return true;
  }
};
export {
  LinksPlugin
};
//# sourceMappingURL=LinksPlugin-TAY4ORM6.js.map
