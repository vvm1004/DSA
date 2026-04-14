class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

// class CSLinkedList {
//     constructor(value) {
//         const newNode = new Node(value);
//         newNode.next = newNode; 
//         this.head = newNode;
//         this.tail = newNode;
//         this.length = 1;
//     }   
// }

class CSLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    toString() {
      let tempNode = this.head;
      let result = '';
        while (tempNode) {
            result += tempNode.value;
            tempNode = tempNode.next;
            if(tempNode === this.head) {
                break;
            }
            result += ' -> ';
        }
        return result;
    }
    
    append(value) {
        const newNode = new Node(value);
        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
            newNode.next = newNode; 
        } else {
            this.tail.next = newNode; 
            newNode.next = this.head; 
            this.tail = newNode; 
        }
        this.length++;
    }

    prepend(value) {
        const newNode = new Node(value);
        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
            newNode.next = newNode; 
        }
        else {
            newNode.next = this.head; 
            this.tail.next = newNode; 
            this.head = newNode; 
        }
        this.length++;
    }
    traverse(){
        let tempNode = this.head;
        while(tempNode){
            console.log(tempNode.value);
            tempNode = tempNode.next;
            if(tempNode === this.head){
                break;
            }
        }
    }
    search(value){
        let current = this.head;
        let index = 0;
        while(current){
            if(current.value === value){
                return index;
            }
            current = current.next;
            index++;
            if(current === this.head){
                break;
            }
        }
        return -1;
    }

    get(index) {
        if (index < 0 || index >= this.length) {
            return null;
        }
        let current = this.head;
        for (let i = 0; i < index; i++) {
            current = current.next;
        }
        return current;
    }

    setValue(index, value) {
        const temp = this.get(index);
        if (temp) {
            temp.value = value;
            return true;
        }
        return false;
    }

    popFirst() {
        if (this.length === 0) return null;
        const poppedNode = this.head;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        }
        else {
            this.head = this.head.next;
            this.tail.next = this.head;
            poppedNode.next = null;
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
        } else {
            let temp = this.head;
            while(temp.next !== this.tail){
                temp = temp.next;
            }
            temp.next = this.head;
            this.tail = temp;
            poppedNode.next = null;
        }
        this.length--;
        return poppedNode;
    }

    remove(index){
        if(index < 0 || index >= this.length) return null;
        if(index === 0) return this.popFirst();
        else if(index === this.length - 1) return this.pop();
        const prevNode = this.get(index - 1);
        const poppedNode = prevNode.next;
        prevNode.next = poppedNode.next;
        poppedNode.next = null;
        this.length--;
        return poppedNode;
    }
    delete(){
        this.tail.next = null;
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
}
let newLinkedList = new CSLinkedList();
newLinkedList.append(1);
newLinkedList.append(2);
newLinkedList.append(3);
newLinkedList.append(40);
newLinkedList.delete();
// newLinkedList.remove(3);

// newLinkedList.traverse();
console.log(newLinkedList.toString());