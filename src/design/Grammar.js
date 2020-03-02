import { dispatch, actions } from "codesandbox-api";

const parseLine = input => {
  // const actionPattern = /\s*(?<op>action) \s* (?<action>\w*)/
  const patterns = {
    uiPattern: {
      pattern: /\s*(ui)\s+(\w+)\s+(("[\w]*")|({[\w]*}))\s+(("[\w]*")|({[\w]*}))/,
      file: "/src/index.js",
      process: (pattern, match) =>
        `<${match[pattern.type]} ${match[pattern.arg1]}  ${
          match[pattern.arg2]
        }/>`,
      op: 1,
      type: 2,
      arg1: 3,
      arg2: 6
    },
    statePattern: {
      pattern: /^\s*(state)\s+(\w+)\s*:?\s*(.*)$/,
      process: (pattern, match) =>
        `  ${match[pattern.var]}: ${match[pattern.initializer]}`,
      file: "/src/app/state.js",
      op: 1,
      var: 2,
      initializer: 3
    },
    actionPattern: {
      pattern: /\s*(action)\s+(\w+)\((.*)\)/,
      file: "/src/app/actions/js",
      process: (pattern, match) => {
        const param = match[pattern.param];
        if (param) {
          return `${match[pattern.name]}({state,actions,effects},${param}){
          }`;
        } else {
          return `${match[pattern.name]}({state,actions,effects}){
          }`;
        }
      },
      op: 1,
      name: 2,
      param: 3
    }
  };
  let output = "";

  Object.keys(patterns).map(key => {
    const pattern = patterns[key];
    const matcher = input.match(pattern.pattern);
    if (matcher) {
      output = pattern.process(pattern, matcher);
      console.log("output", output);
      // dispatch(actions.editor.openModule(pattern.file))
      return output;
    }
    return false;
  });
  console.log("parseLine", input, output);
  return output;
  /*^
  
  /*
  state counter: 0
  ^
  action modifycounter()
  ui button "modify" {modifyCounters}
  
  */
};
export default parseLine;
//parseLine('ui button "modify" {modifyCounters}');

// const nearley = require("nearley");
// const compile = require("nearley/lib/compile");
// const generate = require("nearley/lib/generate");
// const nearleyGrammar = require("nearley/lib/nearley-language-bootstrapped");
// console.log("This is grammars");
// function compileGrammar(sourceCode) {
//   // Parse the grammar source into an AST
//   const grammarParser = new nearley.Parser(nearleyGrammar);
//   grammarParser.feed(sourceCode);
//   const grammarAst = grammarParser.results[0]; // TODO check for errors

//   // Compile the AST into a set of rules
//   const grammarInfoObject = compile(grammarAst, {});
//   // Generate JavaScript code from the rules
//   const grammarJs = generate(grammarInfoObject, "grammar");

//   // Pretend this is a CommonJS environment to catch exports from the grammar.
//   const module = { exports: {} };
//   eval(grammarJs);

//   return module.exports;
// }

// const grammar = compileGrammar(`
// @{%
//   const makeFile = (name) => {
//     return name + "|"
//   };
//   const makeAction = (name,param="") => {
//     const file = makeFile("app/actions.js")
//     if(param !== "" ) param = ", " + param
//     return file + name + "({state}" + param + "){\\n},"
//   }
//   const makeState = (d) => {
//     const file = makeFile("app/state.js")
//     return file + d[2] + ": " + d[6] + ","
//   }
//   const makeUI = (d) => {
//     const file = makeFile("index.js")

//     console.log(d)
//     switch(d[2]){
//       case "button":
//         return \`<button label=\${d[4]} onClick=\${d[6]} \`
//       case "value":
//         return \`<button label=\${d[4]} attr=\${d[6]} \`

//       break;
//     }
//     return file + d[2]
//   }
//   const makeEffect = (d) => {
//     const file = makeFile("app/effects.js")
//     return "EFFECT"
//   }
// %}
// main -> action | state | ui | effect

// ANY -> [^;]:*     {% function(d) {return d[0].join("")} %}
// _ -> [\\s]:*     {% function(d) {return null } %}
// word -> [a-zA-Z]:* {% function(d) {return d[0].join("")} %}
// action -> "action" _ word "(" _ ")" {% function(d) {return makeAction(d[2])} %}
// | "action" _ word "(" word ")"{% function(d) {return makeAction(d[2],d[4])} %}
// reference -> "{" word "}" {% function(d) {return "{" + d[1] + "}" } %}
//   | ["] word ["] {% function(d) {return  '"' + d[1]  + '"' } %}
// state -> "state" _ word _ ":" _ ANY ";"  {% function(d) {return makeState(d) } %}
// ui -> "ui" _ word _ reference _ reference {% function(d) {return makeUI(d) } %}
// zz -> "ui" _ word _
// effect "effect" _ word  {% function(d) {return makeEffect(d) } %}

// `);

// const parser = new nearley.Parser(nearley.Grammar.fromCompiled(grammar));
// parser.feed('ui button "thelabel"  {something}');
// // parser.feed("action increment()");
// console.log("parse", parser.results[0]);
// export default lineToParse => {
//   console.log("Parse", lineToParse)
//   try {
//   const parser = new nearley.Parser(nearley.Grammar.fromCompiled(grammar));

//   parser.feed(lineToParse);
//   const results = parser.results[0]
//   console.log("Result", results)
//   return results;}
//   catch (e){
//     console.log(e)
//     return e.toString()
//   }
// };
// // //https://www.npmjs.com/package/moo
