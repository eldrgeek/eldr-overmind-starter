// import { createOvermind } from "overmind";
import { createOvermind } from "../util/statemanager";
import { createHook } from "overmind-react";
import { logLoader } from "../util/logloader";
logLoader(module);
export const app = createOvermind({
  state: {
    reloadLocal: false,
    title: "The applications",
    count: 36
  },

  actions: {
    increaseCount({ state }) {
      state.count += 10;
    },
    decreaseCount({ state }) {
      state.count--;
    }
  }
});

export const useApp = createHook();
