import { Stack } from "./stack.js";

const myStack = new Stack(10);
myStack.push(20);
myStack.push(30);

console.log("Top Value:", myStack.peek());