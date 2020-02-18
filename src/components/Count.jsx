import { CurrentModule, React, useApp } from "../util/CurrentModule";

import { logLoader } from "../util/logloader";
logLoader(module);

const Count = () => {
  const { state } = useApp();
  const style = {
    color: state.count < 0 ? "red" : "black"
  };
  return (
    <React.Fragment>
      <h2 style={style}>{state.count}</h2>
    </React.Fragment>
  );
};
export default Count;
CurrentModule(Count);
