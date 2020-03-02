import { CurrentModule, React, useApp, UI } from "../util";
import styled from "styled-components";
import TextareaAutosize from "react-autosize-textarea";
import Grammar from "./Grammar";
import { dispatch, actions as uiActions } from "codesandbox-api";

// import design from "./designer";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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

  const changeValue = () => {
    const _dev = state._dev;
    const string = _dev.designLines[_dev.lineIndex];
    const [file, translate] = Grammar(string);

    if (!file) {
      toast("ERROR  " + translate);
    } else {
      toast.success("Paste this into  " + file + "\n" + translate);
      dispatch(uiActions.editor.openModule(file));
      actions._dev.setClipboard(translate);
      const el = document.querySelector("#clip");
      setTimeout(() => {
        el.select();
        document.execCommand("copy");
      });
    }
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
      <ToastContainer autoClose={2000} />
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
