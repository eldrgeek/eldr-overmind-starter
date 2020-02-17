import React from "react";
import ReactDOM from "react-dom";
import { createOvermind } from "overmind";
import { createHook, Provider } from "overmind-react";
import "./styles.css";

const app = createOvermind({
  state: {
    count: 0
  },
  actions: {
    increaseCount({ state }) {
      state.count++;
    },
    decreaseCount({ state }) {
      state.count--;
    }
  }
});

const useApp = createHook();

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
