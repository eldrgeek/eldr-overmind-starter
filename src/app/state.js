import { logLoader } from "../util/logloader";
logLoader(module);
// if(window.reloaded) window.location.reload(true)
// window.reloaded = true;
const state = {
  reloadLocal: false,
  title: "CodeSandbox + Overmind\n=\n Awesome",
  count: 16
};

export default state;
