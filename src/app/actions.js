import { logLoader } from "../util/logloader";
logLoader(module);
export const actions = {};
actions.incr = {
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
actions._dev = {
  setClipboard({ state }, contents) {
    state._dev.toClipboard = contents;
  },
  toggleVisible({ state }, event) {
    state._dev.clipperVisible = !state._dev.clipperVisible;
    if (event) event.preventDefault();
  },

  setDesignFromText(
    { state },
    text = `this one
that
other
^
more
and more`
  ) {
    const _dev = state._dev;
    const lines = text.split("\n");
    _dev.lineIndex = 0;
    lines.forEach((line, i) => {
      if (line.match(/\^/)) _dev.lineIndex = i;
    });
    lines.splice(_dev.lineIndex, 1);
    _dev.designLines = lines;
    // console.log("Lines that are set is ", lines);
  },
  downLine({ state }) {
    const _dev = state._dev;
    if (_dev.lineIndex === 0) return;
    _dev.lineIndex--;
  },
  upLine({ state }) {
    const _dev = state._dev;
    if (_dev.lineIndex >= _dev.designLines.length - 1) return;
    _dev.lineIndex++;
  }
};
