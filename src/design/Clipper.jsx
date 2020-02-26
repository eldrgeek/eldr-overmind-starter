import { CurrentModule, React, useApp, UI } from "../util";
import styled from "styled-components";
import TextareaAutosize from "react-autosize-textarea";

const StyledTextarea = styled(TextareaAutosize)`
  font-size: ${({ theme }) => theme.textarea.fontSize};
  border-color: ${({ theme }) => theme.textarea.borderColor};
  resize: none;
  box-sizing: border-box;
  width: 100%;
`;

const Clipper = () => {
  const { state, actions } = useApp();
  const upValue = () => {
    const el = document.querySelector("#target");
    setTimeout(() => {
      el.select();
      document.execCommand("copy");
    });
  };
  const changeText = event => {
    const target = event.target;
    actions._dev.setClipboard(target.value);
  };
  // setTimeout(upValue,1000)
  return (
    <div
      style={{ display: !state._dev.clipperVisible ? "none" : "block" }}
      className="App"
    >
      <StyledTextarea
        rows={3}
        maxRows={10}
        theme={{
          textarea: {
            fontSize: "14px",
            borderColor: "green"
          }
        }}
        value={state._dev.toClipboard}
        id="target"
        onChange={changeText}
      />

      <button onClick={upValue}> Copy </button>
    </div>
  );
};

export default Clipper;
CurrentModule(Clipper);
