import { CurrentModule, React, useApp } from "../util/CurrentModule";

import contents from "./design";
import Clipper from "./Clipper";
import { dispatch, actions } from "codesandbox-api";
import state from "../app/state";
// let fs = require("fs");

// let contents = "this\nthat";
// console.log(contents.split("\n"));
const Designer = () => {
  // // let readFile = fs.readFileSync;
  // // contents = readFile("src/design/design.js").toString();
  // // console.log("This are the", contents);
  const { state, actions } = useApp();
  actions.parseDesign(contents);
  return (
    <div>
      {/* <Clipper text={"PASTE CODE"} /> */}
      The change line follows
      <br />
      {state._design.code}
      <br />
      designer
    </div>
  );
};
export default Designer;
