import { CurrentModule, React, useApp } from "../util/CurrentModule";
import { logLoader } from "../util/logloader";

import Button from "./Button";
import Count from "./Count";
logLoader(module);

const Body = () => {
  const { state } = useApp();
  return (
    <React.Fragment>
      {state.demoStep > 0 ? (
        <React.Fragment>
          <Button type="decrease" />
          <Button type="increase" />
          <Count />
        </React.Fragment>
      ) : (
        ""
      )}
    </React.Fragment>
  );
};
export default Body;
CurrentModule(Body);
