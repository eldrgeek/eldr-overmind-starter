import { CurrentModule, React, useApp } from "./util/CurrentModule";

// import "./styles.css";
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
CurrentModule(App);
