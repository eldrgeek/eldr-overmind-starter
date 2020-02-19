import { createHook } from "overmind-react";
import state from "./state";
import { onInitialize } from "./onInitialize";
import { actions } from "./actions";
import * as effects from "./effects";

// import { createOvermind } from "overmind";
import { createOvermind } from "../util/statemanager";
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
      console.log("setting up dispoase");
      data.app = app;
      data.useApp = useApp;
      data.statemanager = config.statemanager;
      console.log("CANCEL REACTION", data.statemanager.id);
      data.statemanager.cancelReaction = true;
    });
  } else {
    console.log("restoring what was disposed");
    // module.hot.data.config.state.cancelReaction = true
    // if (module.hot.data.statemanager) {
    // }
    console.log("CANCEL REACTION", module.hot.data.statemanager.id);
    module.hot.data.statemanager.cancelReaction = true;
    initialize();
    module.hot.data.statemanager = config.statemanager;
    // app = module.hot.data.app

    // useApp = module.hot.data.useApp
    config.onInitialize(config, app);

    // module.hot.accept(errorHandler);
  }
}
