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
  setDesignFromText({ state }, text) {
    text = `this one
that
other
more
^
and more`;
    state._dev.designLines = text.split("\n");
    state._dev.designLines.forEach((line, i) => {
      if (line.match(/\^/)) state._dev.lineIndex = i;
    });
  },
  upLine({ state }) {
    const _dev = state._dev;
    if (_dev.lineIndex <= 1) return;
    const left = _dev.designLines.slice(0, _dev.lineIndex - 1);
    const right = _dev.designLines.slice(_dev.lineIndex + 1);
    left.push("^");
    left.push(_dev.designLines[_dev.lineIndex - 1]);
    _dev.designLines = left.concat(right);
    _dev.lineIndex--;
  },
  downLine({ state }) {
    const _dev = state._dev;
    if (_dev.lineIndex >= _dev.designLinex - 3) return;
    const left = _dev.designLines.slice(0, _dev.lineIndex);
    const right = _dev.designLines.slice(_dev.lineIndex + 2);
    left.push(_dev.designLines[_dev.lineIndex + 1]);
    left.push("^");
    _dev.designLines = left.concat(right);
    _dev.lineIndex++;
  }
};
