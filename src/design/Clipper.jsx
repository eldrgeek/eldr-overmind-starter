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

// const copyToClipboard = str => {
//   const el = document.createElement("TextArea"); // Create a <TextArea> element
//   el.value = str; // Set its value to the string that you want copied
//   el.setAttribute("readonly", ""); // Make it readonly to be tamper-proof
//   el.style.position = "absolute";
//   el.style.left = "-9999px"; // Move outside the screen to make it invisible
//   document.body.appendChild(el); // Append the <textarea> element to the HTML document
//   const selected =
//     document.getSelection().rangeCount > 0 // Check if there is any content selected previously
//       ? docume`nt.getSelection().getRangeAt(0) // Store selection if found
//       : false; // Mark as false to know no selection existed before
//   el.select(); // Select the <textarea> content
//   document.execCommand("copy"); // Copy - only works as a result of a user action (e.g. click events)
//   document.body.removeChild(el); // Remove the <textarea> element
//   if (selected) {
//     // If a selection existed before copying
//     document.getSelection().removeAllRanges(); // Unselect everything on the HTML document
//     document.getSelection().addRange(selected); // Restore the original selection
//   }
// };

const Clipper = () => {
  const { state, actions } = useApp();
  console.log("Upvalue", state);
  const upValue = () => {
    const el = document.querySelector("#target");
    setTimeout(() => {
      el.select();
      document.execCommand("copy");
    });
  };
  const changeText = event => {
    const target = event.target;
    console.log(target.value);
    actions._dev.setClipboard(target.value);
  };
  // setTimeout(upValue,1000)
  return (
    <div className="App">
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
