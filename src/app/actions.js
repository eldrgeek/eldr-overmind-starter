import { logLoader } from "../util/logloader";
logLoader(module);
export const actions = {
  increaseCount({ state }) {
    state.count++;
  },
  decreaseCount({ state }) {
    state.count--;
  },

  nextStep({ state }, event) {
    if (event.target.tagName === "BUTTON") return;
    if (state.demoStep + 1 >= state.prompts.length) {
      state.demoStep = 0;
    } else {
      state.demoStep++;
    }
  }
};
