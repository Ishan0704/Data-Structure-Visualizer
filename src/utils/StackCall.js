const Stack = require("./Stack");

const stack = new Stack(5);

console.log("Pushing elements into stack : ");

stack.push(10);
stack.push(11);

stack.pop();
console.log("Is stack empty ", stack.isempty());

console.log("Is stack full ", stack.isfull());

stack.pop();
