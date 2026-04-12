// Palindrome Linked List (LeetCode 234)
// Instructions
// Given the head of a singly linked list, return true if it is a palindrome orfalseotherwise.

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
}

function isPalindrome(head) {
    let slow = head;
    let fast = head;
    while (fast && fast.next){
        fast = fast.next.next;
        slow = slow.next;
    }
    slow = reverse(slow);
    fast = head;

    while(slow){
        if(slow.val !== fast.val){
            return false;
        }
        slow = slow.next;
        fast = fast.next;
    }
    return true;
 };

 function reverse(head){
    let prev = null;
    while(head){
        let next = head.next;
        head.next = prev;
        prev = head;
        head = next;
    }
    return prev;
 }

 module.exports = { ListNode, isPalindrome}; 