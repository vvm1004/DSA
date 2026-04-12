class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
class LinkedList{
    constructor(){
        this.head = null
        this.tail = null
        this.length = 0
    }

    append(value){
        const newNode = new Node(value)
        if(this.length === 0){
            this.head = newNode
            this.tail = newNode
        } else{
            this.tail.next = newNode
            this.tail = newNode
        }
        this.length++
    }

    toString(){
        let tempNode = this.head
        let result = ''
        while(tempNode !== null){
            result += tempNode.value
            if(tempNode.next !== null){
                result += ' -> '
            }
            tempNode = tempNode.next
        }
        return result
    }

    prepend(value){
        const newNode = new Node(value)
        if(this.length === 0){
            this.head = newNode
            this.tail = newNode
        } else{
            newNode.next = this.head
            this.head = newNode
        }
        this.length++
    }

    insert(value,index){
        const newNode = new Node(value)

        if(index < -1 || index > this.length){
            return false;
        }else if(this.length === 0){
            this.head = newNode
            this.tail = newNode
        } else if(index === 0){
            newNode.next = this.head
            this.head = newNode
        } else if(index === -1 || index === this.length){
            this.tail.next = newNode
            this.tail = newNode
        } else {
            let tempNode = this.head
            for(let i = 0; i < index - 1; i++){
                tempNode = tempNode.next
            }
            newNode.next = tempNode.next
            tempNode.next = newNode
        }
        this.length++
        return true
    }

    traverse(){
        let current = this.head
        while(current !== null){
            console.log(current.value)
            current = current.next
        }
    }

    search(value){
        let current = this.head
        let index = 0
        while(current !== null){
            if(current.value === value){
                return index
            }
            current = current.next
            index++
        }       
        return -1
    }

    get(index){
        if(index === -1){
            return this.tail
        }else if(index < 0 || index >= this.length){
            return null
        }
        let current = this.head
        for(let i = 0; i < index; i++){
            current = current.next
        }
        return current
    }

    setValue(index, value){
        const node = this.get(index)
        if(node){
            node.value = value
            return true
        }
        return false
    }

    popFirst(){
        if(this.length === 0){
            return null
        }
        const poppedNode = this.head
        if(this.length === 1){
            this.head = null
            this.tail = null
            return poppedNode
        } else {
            this.head = this.head.next
            poppedNode.next = null
        }
        this.length--
        return poppedNode
    }
    pop(){
        if(this.length === 0){
            return null
        }
        const poppedNode = this.tail
        if(this.length === 1){
            this.head = null
            this.tail = null
            return poppedNode
        }
        else{
            let temp = this.head
            while(temp.next !== this.tail){
                temp = temp.next
            }
            this.tail = temp
            temp.next = null
        }
        this.length--
        return poppedNode
    }
    remove(index){
        if(index < 0 || index >= this.length){
            return null
        }
        if(index === 0){
            return this.popFirst()
        }
        if( index === this.length - 1){
            return this.pop()
        }
        const prevNode = this.get(index - 1)
        const poppedNode = prevNode.next
        prevNode.next = poppedNode.next
        poppedNode.next = null
        this.length--
        return poppedNode
    }

    deleteAll(){
        this.head = null
        this.tail = null
        this.length = 0
    }
}

let newLinkedList = new LinkedList()
newLinkedList.append(10)
newLinkedList.append(20)
newLinkedList.append(30)
newLinkedList.append(40)
newLinkedList.deleteAll()
// newLinkedList.remove(2)
// newLinkedList.toString()
// newLinkedList.traverse()
// newLinkedList.setValue(1, 100)
// console.log(newLinkedList.popFirst())

console.log(newLinkedList.toString())