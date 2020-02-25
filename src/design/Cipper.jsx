import { CurrentModule, React, useApp } from "../util/CurrentModule";

// const copyToClipboard = str => {
//   const el = document.createElement("textarea"); // Create a <textarea> element
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
  const { state } = useApp();
  console.log(state);
  const upValue = () => {
    const el = document.querySelector("#target");
    setTimeout(() => {
      el.select();
      document.execCommand("copy");
    });
  };
  return (
    <div className="App">
      {/* <textarea id="source">A bunch of stuff goes here</textarea> */}
      <textarea
        style={{ position: "absolute", left: "-1000px" }}
        // value={state._dev.toClipboard}
        id="target"
      >
        Copied stufff here
      </textarea>
      <button onClick={upValue}> Copy </button>
    </div>
  );
};

export default Clipper;
CurrentModule(Clipper);
