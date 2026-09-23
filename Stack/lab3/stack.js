import { Node } from './node.js';

export class Stack {

    push(value) {
                const newNode = new Node(value);
                if (this.length === 0) {
                    this.top = newNode;
                } else {
                    newNode.next = this.top;
                    this.top = newNode;
                }
                this.length++;
                return this;
            }
            
    peek() {
        if (this.length === 0) return undefined;
        return this.top.value;
    }
}