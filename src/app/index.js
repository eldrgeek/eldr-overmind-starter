import { createHook } from "overmind-react";
import state from "./state";
import { onInitialize } from "./onInitialize";
import { actions } from "./actions";
import * as effects from "./effects";

import { createOvermind } from "overmind";
// import { createOvermind } from "../util/statemanager";
import { logLoader } from "../util/logloader";
logLoader(module);

const config = {
  onInitialize,
  state,
  actions,
  effects
};
// console.log("state", state);
export let app;
export let useApp;

const initialize = () => {
  app = createOvermind(config, {
    // devtools: 'penguin.linux.test:8080', //
    devtools: "localhost:3031"
  });
  console.log(app);
  useApp = createHook();
};

if (!module.hot) {
  //   console.log("not hot")
  //   initialize();
  initialize();
} else {
  if (!module.hot.data) {
    console.log("no hot data");
    initialize();
    module.hot.dispose(data => {
      console.log("Disposing");
      if (config.statemanager) {
        data.statemanager = config.statemanager;
        data.statemanager.reactionDisposers.forEach(dispose => dispose());
      }
    });
    /** Now we should always have module.hot.data */
  } else {
    console.log("Hot data");
    if (module.hot.data.statemanager)
      module.hot.data.statemanager.reactionDisposers.forEach(dispose =>
        dispose()
      );
    initialize();

    module.hot.data.statemanager = config.statemanager;
    // app = module.hot.data.app
    // useApp = module.hot.data.useApp
    config.onInitialize(config, app);
    // module.hot.accept(errorHandler);
  }
}
