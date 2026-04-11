// Merge two sorted linked lists (HackerRank)
// Instructions
// Given pointers to the heads of two sorted linked lists, merge them into a single, sorted linked list. Either head pointer may be null meaning that the corresponding list is empty.

// Example

// headA refers to 1->3->7-> null  
// headB refers to 1->2->null 
// The new list is 1->1->2->3->7-> null 
// Function Description

// Complete the mergeLists function in the editor below.

// mergeLists has the following parameters:

// SinglyLinkedListNode pointer headA: a reference to the head of a list

// SinglyLinkedListNode pointer headB: a reference to the head of a list

// Returns

// SinglyLinkedListNode pointer: a reference to the head of the merged list   

const SinglyLinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

function mergeLists(head1, head2) {
    if(head1 === null){
        return head2;
    }

    if(head2 === null){
        return head1;
    }

    let dummy = new SinglyLinkedListNode(0);
    let current = dummy;


    while(head1 && head2){
        if(head1.data <= head2.data){
            current.next = head1;
            head1 = head1.next;
        }else{
            current.next = head2;
            head2 = head2.next;
        }
        current = current.next;
    }
    if(head1 !== null){
        current.next = head1;
    }

    if(head2 !== null){
        current.next = head2;
    }

    return dummy.next;
}

module.exports = { mergeLists, SinglyLinkedListNode}; 