const nearley = require("nearley");
const compile = require("nearley/lib/compile");
const generate = require("nearley/lib/generate");
const nearleyGrammar = require("nearley/lib/nearley-language-bootstrapped");
console.log("This is grammars");
function compileGrammar(sourceCode) {
  // Parse the grammar source into an AST
  const grammarParser = new nearley.Parser(nearleyGrammar);
  grammarParser.feed(sourceCode);
  const grammarAst = grammarParser.results[0]; // TODO check for errors

  // Compile the AST into a set of rules
  const grammarInfoObject = compile(grammarAst, {});
  // Generate JavaScript code from the rules
  const grammarJs = generate(grammarInfoObject, "grammar");

  // Pretend this is a CommonJS environment to catch exports from the grammar.
  const module = { exports: {} };
  eval(grammarJs);

  return module.exports;
}

const grammar = compileGrammar(`
@{%
  const makeFile = (name) => {
    return name + "|"
  };
  const makeAction = (name,param="") => {
    const file = makeFile("app/actions.js")
    if(param !== "" ) param = ", " + param
    return file + name + "({state}" + param + "){\\n},"
  }
  const makeState = (d) => {
    const file = makeFile("app/state.js")
    return file + d[2] + ": " + d[6] + ","
  }
  const makeUI = (d) => {
    const file = makeFile("index.js")

    console.log(d)
    switch(d[2]){
      case "button":
        return \`<button label=\${d[4]} onClick=\${d[6]} \`
      case "value":
        return \`<button label=\${d[4]} attr=\${d[6]} \`

      break;
    }
    return file + d[2]
  }
  const makeEffect = (d) => {
    const file = makeFile("app/effects.js")
    return "EFFECT"
  }
%}
main -> action | state | ui | effect

ANY -> [^;]:*     {% function(d) {return d[0].join("")} %}
_ -> [\\s]:*     {% function(d) {return null } %}
word -> [a-z]:* {% function(d) {return d[0].join("")} %}
action -> "action" _ word "(" _ ")" {% function(d) {return makeAction(d[2])} %}
| "action" _ word "(" word ")"{% function(d) {return makeAction(d[2],d[4])} %}
reference -> "{" word "}" {% function(d) {return "{" + d[1] + "}" } %}
  | ["] word ["] {% function(d) {return  '"' + d[1]  + '"' } %}
state -> "state" _ word _ ":" _ ANY ";"  {% function(d) {return makeState(d) } %}
ui -> "ui" _ word _ reference _ reference {% function(d) {return makeUI(d) } %}
zz -> "ui" _ word _
effect "effect" _ word  {% function(d) {return makeEffect(d) } %}

`);

const parser = new nearley.Parser(nearley.Grammar.fromCompiled(grammar));
parser.feed('ui button "thelabel"  {something}');
// parser.feed("action increment()");
console.log("parse", parser.results[0]);
export default lineToParse => {
  const parser = new nearley.Parser(nearley.Grammar.fromCompiled(grammar));

  parser.feed(lineToParse);
  return parser.results[0];
};
// //https://www.npmjs.com/package/moo
