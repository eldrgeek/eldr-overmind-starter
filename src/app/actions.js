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
    if (event.target.tagName !== "BUTTON") state.demoStep++;
  }
};
