const state = {
  errorMessage: "",
  timeout: 1000
};

const actions = {
  setErrorMessage({ state, actions }, message) {
    state.errorMessage = message;
    setTimeout(actions.clearErrorMessage, state.timeout);
  },
  clearErrorMessage({ state }) {
    state.errorMessage = "";
  }
};

export default {
  state,
  actions
};
