class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class CircularDoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    append(value){
        const newNode = new Node(value);
        if(this.length === 0){
            this.head = newNode;
            this.tail = newNode;
            newNode.next = newNode;
            newNode.prev = newNode;
        } else{
            this.tail.next = newNode;
            this.head.prev = newNode;
            newNode.prev = this.tail;
            newNode.next = this.head;
            this.tail = newNode;
        }
        this.length++;           
    }
    toString(){
      let currentNode = this.head;
      let result = '';
      while(currentNode){
        result += currentNode.value;
        currentNode = currentNode.next;
        if(currentNode === this.head) break;
        result += ' <-> ';
      }
      return result;

    }
    prepend(value){
        const newNode = new Node(value);
        if(this.length === 0){
            this.head = newNode;
            this.tail = newNode;
            newNode.next = newNode;
            newNode.prev = newNode;
        } else{
            newNode.next = this.head;
            newNode.prev = this.tail;
            this.head.prev = newNode;
            this.tail.next = newNode;
            this.head = newNode;
        }
        this.length++;
    }
    traverse(){
        let currentNode = this.head;
        while(currentNode){
            console.log(currentNode.value);
            currentNode = currentNode.next;
            if(currentNode === this.head) break;
        }
    }
    reverseTraverse(){
        let currentNode = this.tail;
        while(currentNode){
            console.log(currentNode.value);
            currentNode = currentNode.prev;
            if(currentNode === this.tail) break;
        }
    }
    search(target){
        let currentNode = this.head;
        let index = 0;
        while(currentNode){
            if(currentNode.value === target) return index;
            currentNode = currentNode.next;
            index++;
            if(currentNode === this.head) break;
        }
        return -1;
    }
    get(index) {
        if (index < 0 || index >= this.length) {
            return null;
        }
        let currentNode;
        if (index < Math.floor(this.length / 2)) {
            currentNode = this.head;
            for (let i = 0; i < index; i++) {
                currentNode = currentNode.next;
            }
        } else {
            currentNode = this.tail;
            for (let i = this.length - 1; i > index; i--) {
                currentNode = currentNode.prev;
            }
        }
        return currentNode;
    }
    setValue(index, value) {
        const temp = this.get(index);
        if (temp) {
            temp.value = value;
            return true;
        }
        return false;
    }

    insert(index, value) {
        if (index < 0 || index > this.length) {
            console.error("Error: Index out of bounds.");
            return;
        }
        if (index === 0) {
            this.prepend(value);
            return;
        } else if (index === this.length) {
            this.append(value);
            return;
        }
        const newNode = new Node(value);
        const tempNode = this.get(index - 1);
        newNode.next = tempNode.next;
        newNode.prev = tempNode;
        tempNode.next.prev = newNode;
        tempNode.next = newNode;
        this.length++;
    }

    popFirst() {
        const poppedNode = this.head;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = this.head.next;
            poppedNode.next = null;
            poppedNode.prev = null;
            this.head.prev = this.tail;
            this.tail.next = this.head;
        }
        this.length--;
        return poppedNode;
    }

    pop(){
        if(this.length === 0) return null;
        const poppedNode = this.tail;
        if(this.length === 1){
            this.head = null;
            this.tail = null;
        } else{
            this.tail = this.tail.prev;
            poppedNode.prev = null;
            poppedNode.next = null;
            this.tail.next = this.head;
            this.head.prev = this.tail;
        }
        this.length--;
        return poppedNode;
    }
    remove(index){
        if (index < 0 || index >= this.length) {
            return null;
        }
        if (index === 0) {
            return this.popFirst();
        } 
        if (index === this.length - 1) {
            return this.pop();
        } 
        const poppedNode = this.get(index);
        poppedNode.prev.next = poppedNode.next;
        poppedNode.next.prev = poppedNode.prev;
        poppedNode.next = null;
        poppedNode.prev = null;
        this.length--;
        return poppedNode;
    }
}

newCDLL = new CircularDoublyLinkedList();
newCDLL.append(10);
newCDLL.append(20);
newCDLL.append(30);
newCDLL.prepend(5);
console.log(newCDLL.toString());
