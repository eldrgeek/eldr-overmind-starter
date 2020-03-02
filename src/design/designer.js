export default `
state counter: 0
action modifyCounter(count=10)
ui button "modify" {modifyCounter}
action incrementCounter()
ui button "increment" {incrementCounter}
action decrementCounter()
ui button "decrement" {decrementCounter}
`;
