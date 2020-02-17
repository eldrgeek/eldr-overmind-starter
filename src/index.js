import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import { app } from "./app";
import { useApp } from "./app";
import { Provider } from "overmind-react";

function App() {
  const { state, actions } = useApp();

  return (
    <div className="App">
      <h1>{state.count}</h1>
      <button onClick={() => actions.decreaseCount()}>decrease</button>
      <button onClick={() => actions.increaseCount()}>increase</button>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider value={app}>
    <App />
  </Provider>,
  rootElement
);
