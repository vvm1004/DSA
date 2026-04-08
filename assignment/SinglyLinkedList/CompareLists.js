// Compare two linked lists (HackerRank)
// Instructions
// You’re given the pointer to the head nodes of two linked lists. Compare the data in the nodes of the linked lists to check if they are equal. If all data attributes are equal and the lists are the same length, return 1 . Otherwise, return 0 .

// Example

// list1: 1 -> 2 -> 3 -> NULL
// list2: 1 -> 2 -> 3 -> 4 -> NULL
// The two lists have equal data attributes for the first 3 nodes. list2 is longer, though, so the lists are not equal. Return 0.

// Function Description

// Complete the compare_lists function in the editor below.

// compare_lists has the following parameters:

// SinglyLinkedListNode llist1: a reference to the head of a list

// SinglyLinkedListNode llist2: a reference to the head of a list

// Returns

// int: return 1 if the lists are equal, or 0 otherwise

/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */

function CompareLists(llist1, llist2) {
    while(llist1 && llist2){
        if(llist1.data !== llist2.data){
            return 0;
        }
        if(llist1.next && llist2.next === null || llist1.next  === null && llist2.next){
            return 0;
        }
        llist1 = llist1.next;
        llist2 = llist2.next;
    }
    return 1;
}

module.exports = { CompareLists}; 