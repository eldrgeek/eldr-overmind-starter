import { logLoader } from "../util/logloader";
logLoader(module);
// if(window.reloaded) window.location.reload(true)
// window.reloaded = true;
const state = {
  reloadLocal: false,
  title: state => state.prompts[state.demoStep],
  demoStep: 5,
  prompts: [
    "CodeSandbox",
    "CodeSandbox\n + React",
    "CodeSandbox\n + React\n + Overmind",
    "CodeSandbox\n + React\n + Overmind\n= Awesome",
    "Hot reloading the UI",
    "Logloader shows what's loaded",
    "Styles, of course, reload",
    "Change a component, only what's needed reloads",
    "Focus on single components"
  ],
  count: 10
};
export default state;
