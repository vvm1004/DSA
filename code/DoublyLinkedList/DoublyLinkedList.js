class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    toString() {
        let currentNode = this.head;
        let result = '';
        while (currentNode) {
            result += currentNode.value;
            if (currentNode.next) {
                result += ' <-> ';
            }
            currentNode = currentNode.next;
        }
        return result;
    }

    append(value) {
        const newNode = new Node(value);
        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode; 
            newNode.prev = this.tail; 
            this.tail = newNode; 
        }
        this.length++;
    }

    prepend(value) {
        const newNode = new Node(value);
        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head; 
            this.head.prev = newNode; 
            this.head = newNode; 
        }
        this.length++;
    }

    traverse() {
        let currentNode = this.head;
        while (currentNode) {
            console.log(currentNode.value);
            currentNode = currentNode.next;
        }
    }

    reverseTraverse() {
        let currentNode = this.tail;
        while (currentNode) {
            console.log(currentNode.value);
            currentNode = currentNode.prev;
        }
    }

    search(target) {
        let currentNode = this.head;
        let index = 0;
        while (currentNode) {
            if (currentNode.value === target) {
                return index;
            }
            currentNode = currentNode.next;
            index++;
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
            console.error("Index out of bounds");
            return;
        }
        if (index === 0) {
            return this.prepend(value);
        }
        if (index === this.length) {
            return this.append(value);
        }
        const newNode = new Node(value);
        const prevNode = this.get(index - 1);
        newNode.next = prevNode.next;
        newNode.prev = prevNode;
        prevNode.next.prev = newNode;
        prevNode.next = newNode;
        this.length++;
    }
    popFirst() {
        if (!this.length) {
            return null;
        }
        const poppedNode = this.head;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = this.head.next;
            this.head.prev = null;
            poppedNode.next = null;
        }
        this.length--;
        return poppedNode;
    }
    pop(){
        if (!this.length) {
            return null;
        }
        const poppedNode = this.tail;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = this.tail.prev;
            this.tail.next = null;
            poppedNode.prev = null;
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
        } else if (index === this.length - 1) {
            return this.pop();
        }
        let poppedNode = this.get(index);
        poppedNode.prev.next = poppedNode.next;
        poppedNode.next.prev = poppedNode.prev;
        poppedNode.next = null;
        poppedNode.prev = null;
        this.length--;
        return poppedNode;
    }
    deleteAll() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
}

newDLL = new DoublyLinkedList();
newDLL.append(10);
newDLL.append(20);
newDLL.append(30);
newDLL.prepend(5);
// newDLL.reverseTraverse();
newDLL.insert(1, 15);
newDLL.remove(2);
newDLL.deleteAll();
console.log(newDLL.toString()); 