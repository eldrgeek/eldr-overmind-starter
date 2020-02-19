import { CurrentModule, React, useApp } from "./util/CurrentModule";
import Title from "../src/components/Title.jsx";
import Body from "../src/components/Body.jsx";

import { logLoader } from "./util/logloader";
logLoader(module);

function App() {
  const { actions } = useApp();
  return (
    <div id="div" onClick={actions.nextStep} className="App">
      <Title />
      <Body />
    </div>
  );
}
export default App;
CurrentModule(App);
