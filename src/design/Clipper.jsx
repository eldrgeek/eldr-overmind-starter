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

const TextArea = (maxRows, id, value, onChange) => {
  return (
    <StyledTextarea
      maxRows={maxRows}
      theme={{
        textarea: {
          fontSize: "14px",
          borderColor: "green"
        }
      }}
      value={value}
      onChange={onChange}
      id={id}
      // onChange={changeText}
    />
  );
};

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
      {TextArea(
        10,
        "above",
        state._dev.designLines
          .filter((line, i) => i < state._dev.lineIndex)
          .join("\n"),
        () => null
      )}

      {TextArea(
        10,
        "selected",
        state._dev.designLines
          .filter((line, i) => i === state._dev.lineIndex)
          .join("\n"),
        () => null
      )}
      {TextArea(
        10,
        "below",
        state._dev.designLines
          .filter((line, i) => i > state._dev.lineIndex)
          .join("\n"),
        () => null
      )}
      {TextArea(10, "target", state._dev.toClipboard, () => null)}

      <button onClick={actions._dev.upLine}> Up </button>
      <button onClick={upValue}> Copy </button>
      <button onClick={actions._dev.downLine}> Down </button>
    </div>
  );
};

export default Clipper;
CurrentModule(Clipper);
