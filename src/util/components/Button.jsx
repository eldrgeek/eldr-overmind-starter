import { CurrentModule, React, useApp } from "../CurrentModule";
import styled from "styled-components";

import { logLoader } from "../logloader";
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
  }
`;
const defaultClick = event => {
  console.log("clicked");
  const saved = event.target.innerHTML;
  const target = event.target;
  target.innerHTML = "'onClick' callback prop needed";
  setTimeout(() => (target.innerHTML = saved), 1000);
};
const Button = ({ label = "'label' prop needed", onClick = defaultClick }) => {
  const { actions } = useApp();
  return <FancyButton onClick={onClick}>{label}</FancyButton>;
};

export default Button;
CurrentModule(Button);
