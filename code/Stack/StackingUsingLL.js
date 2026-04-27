class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.top = null;
        this.length = 0;
    }

    push(value) {
        const newNode = new Node(value);
        if(this.length === 0) {
            this.top = newNode;
        }else {
            newNode.next = this.top;
            this.top = newNode;
        }
        this.length++;
    }

    pop(){
        if(this.length === 0) return null;
        const poppedNode = this.top;
        this.top = this.top.next;
        poppedNode.next = null;
        this.length--;
        return poppedNode;
    }

    peek(){
        return this.top;
    }

    isEmpty(){
        if(this.length === 0) {
            return true;
        }
        return false;
    }

    clear(){
        this.top = null;
        this.length = 0;
    }
}

newStack = new Stack();
newStack.push(1);
newStack.push(2);
newStack.push(3);
console.log(newStack);