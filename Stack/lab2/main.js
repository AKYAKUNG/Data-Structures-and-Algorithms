import { Stack } from "./stack.js";

const myStack = new Stack(10);

myStack.push(20);
myStack.push(30);

const poppedNode = myStack.pop();

console.log("Popped value:", poppedNode?.value);