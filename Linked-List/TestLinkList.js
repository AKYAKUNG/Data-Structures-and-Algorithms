import LinkedList from './LinkList.js';

let myLinkedList = new LinkedList(1);
myLinkedList.push(2);
myLinkedList.pop();
myLinkedList.unshift(0);
myLinkedList.set(0, 5);
myLinkedList.reverse();
console.log(myLinkedList);