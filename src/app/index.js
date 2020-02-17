import { createOvermind } from "overmind";
import { createHook } from "overmind-react";
import { logLoader } from "../util/logloader";
logLoader(module);
export const app = createOvermind({
  state: {
    count: 0
  },
  actions: {
    increaseCount({ state }) {
      state.count++;
    },
    decreaseCount({ state }) {
      state.count--;
    }
  }
});

export const useApp = createHook();
