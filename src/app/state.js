import { logLoader } from "../util/logloader";
logLoader(module);
// if(window.reloaded) window.location.reload(true)
// window.reloaded = true;
const state = {
  _dev: {
    toClipboard: "this now goes to the clipboard",
    clipperVisible: true,
    designLines: [
      "first line",
      "^",
      "second line",
      "third line",
      "fourth line"
    ],
    lineIndex: 1
  },
  count: 1,
  count1: 0,
  count2: 0,
  title: state => state.demo.prompts[state.demo.demoStep],

  demo: {
    demoStep: 0,
    prompts: [
      "CodeSandbox\n + React\n + Overmind\n= Awesome",
      "Build the state model, then the UI",
      "Add new members--does not change rest of state",
      "Add or change actions on the fly",
      "See how actions affect state",
      "Maintain state across reloads",
      "Hot reloading the UI",
      "Logloader shows what's loaded",
      "Styles, of course, reload",
      "Change a component, only what's needed reloads",
      "Focus on single components"
    ]
  },

  reloadLocal: false
};
export default state;
//"this\n^\nthat\nother\n"
