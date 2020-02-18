import { CurrentModule, React, useApp } from "../util/CurrentModule";
import styled from "styled-components";

import { logLoader } from "../util/logloader";
logLoader(module);
const FancyButton = styled.button`
  /* Adapt the colors based on primary prop */
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  &:hover {
    background: lightgray;
`;

const Button = props => {
  const { actions } = useApp();
  if (props.type === "decrease")
    return (
      <FancyButton onClick={() => actions.decreaseCount()}>
        decrease
      </FancyButton>
    );
  return (
    <FancyButton onClick={() => actions.increaseCount()}>increase</FancyButton>
  );
};

export default Button;
CurrentModule(Button);
