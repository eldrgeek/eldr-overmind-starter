import { CurrentModule, React, useApp, UI } from "../util";
import styled from "styled-components";
import TextareaAutosize from "react-autosize-textarea";
import Grammar from "./Grammar";
// import design from "./designer";
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
          borderColor: "green",
          color: "red",
          background: "lightgreen"
        }
      }}
      value={value}
      // onChange={onChange}
      id={id}
      style={id === "selected" ? { background: "palegreen" } : {}}
      // onChange={changeText}
    />
  );
};

const Clipper = () => {
  const { state, actions } = useApp();
  // actions._dev.setDesignFromText(design);

  console.log("clipper");
  const changeValue = () => {
    console.log("Change value");
    const _dev = state._dev;
    const string = _dev.designLines[_dev.lineIndex];
    const translate = Grammar(string);
    // actions._dev.setClipboard(translate);
    const el = document.querySelector("#clip");
    setTimeout(() => {
      el.select();
      document.execCommand("copy");
    });
  };
  // setTimeout(changeValue,1000)
  const noOp = ev => ev.preventDefault;
  const upLine = ev => {
    actions._dev.upLine();
    changeValue();
  };
  const downLine = ev => {
    actions._dev.downLine();
    changeValue();
  };
  const changeText = event => {
    const target = event.target;
    actions._dev.setClipboard(target.value);
  };
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
      {TextArea(10, "clip", state._dev.toClipboard, () => null)}

      <button onClick={upLine} onDoubleClick={noOp}>
        {" "}
        Down{" "}
      </button>
      <button onClick={changeValue}> Copy </button>
      <button onClick={downLine}> Up </button>
    </div>
  );
};

export default Clipper;
CurrentModule(Clipper);
