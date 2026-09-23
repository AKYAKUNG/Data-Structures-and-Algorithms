import { Node } from './node.js';

export class Stack {

    constructor() {
        this.top = null;
        this.length = 0;
    }

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
        
    isEmpty() {
        return this.length === 0;
    }
    size() {
        return this.length;
    }
}