import { CurrentModule, React, useApp, UI } from "./util";
// import { Button, Value } from "./util/components";
import styled from "styled-components";
import Clipper from "./design/Clipper";

// import Title from "../src/components/Title.jsx";
// import Body from "../src/components/Body.jsx";
import { logLoader } from "./util/logloader";
logLoader(module);
// import Grammar from "/src/design/Grammar";

const Wrapper = styled.section`
  padding: 1em;
  text-align: center;
  background: paleturquoise;
`;
function App() {
  const { actions } = useApp();
  return (
    <React.Fragment>
      <div onDoubleClick={actions._dev.toggleVisible}>
        <UI.Value wrapper={Wrapper} label="count" attr="count" />
        <UI.Button label="incr" onClick={actions.increaseCount} />
        <UI.Button label="decr" onClick={actions.decreaseCount} />
      </div>
      <div>
        <Clipper />
      </div>
    </React.Fragment>
  );
}
export default App;
CurrentModule(App);
