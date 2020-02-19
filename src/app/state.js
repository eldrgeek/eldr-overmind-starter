import { logLoader } from "../util/logloader";
logLoader(module);
// if(window.reloaded) window.location.reload(true)
// window.reloaded = true;
const state = {
  reloadLocal: false,
  title: state => state.prompt[state.demoStep],
  demoStep: 0,
  prompt: [
    "CodeSandbox\n + React\n + Overmind\n= Awesome",
    "Hot reloading the UI",
    "Focus on single components"
  ],
  count: 16
};

export default state;
