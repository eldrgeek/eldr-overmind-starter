import { CurrentModule, React, useApp } from "./util/CurrentModule";

// import "./styles.css";
import Button from "../src/components/Button";
import Title from "../src/components/Title.jsx";
import Count from "../src/components/Count.jsx";
import { logLoader } from "./util/logloader";
logLoader(module);

function App() {
  const { state } = useApp();
  return (
    <div className="App">
      <Title />
      <Button type="decrease" />
      <Button type="increase" />
      <Count />
    </div>
  );
}
CurrentModule(App);
