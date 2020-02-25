import { CurrentModule, React, useApp } from "../CurrentModule";
import styled from "styled-components";
import { logLoader } from "../logloader";
logLoader(module);
const DefaultWrapper = styled.section`
  /* padding: 1em; */
  text-align: center;
  background: papayawhip;
`;

const Value = ({
  label = "label needed...",
  attr,
  wrapper = DefaultWrapper,
  Wrapper = DefaultWrapper,
  value = "attr or value needed"
}) => {
  const { state } = useApp();
  const stateVar = state[attr];
  if (wrapper) Wrapper = wrapper;
  if (typeof stateVar !== "undefined") value = stateVar;
  const style = {
    color: state.count < 0 ? "red" : "black"
  };
  return (
    <React.Fragment>
      <Wrapper>
        <h4 style={style}>
          {label} {value}
        </h4>
      </Wrapper>
    </React.Fragment>
  );
};
export default Value;
CurrentModule(Value);
