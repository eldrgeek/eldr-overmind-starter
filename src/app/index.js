import { createOvermind } from "overmind";
import { createHook, Provider } from "overmind-react";

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
