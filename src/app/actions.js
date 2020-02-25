import { logLoader } from "../util/logloader";
logLoader(module);
export const actions = {
  increaseCount({ state }) {
    state.count++;
  },
  decreaseCount({ state }) {
    state.count--;
    state.count1--;
    state.count2--;
  },

  nextStep({ state }, event) {
    if (event.target.tagName === "BUTTON") return;
    if (state.demo.demoStep + 1 >= state.demo.prompts.length) {
      state.demo.demoStep = 0;
    } else {
      state.demo.demoStep++;
    }
  }
};
