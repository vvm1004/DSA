const { isPalindrome, ListNode } = require('../../assignment/SinglyLinkedList/isPalindrome');


describe('isPalindrome', function() {
    it('should return true for a palindrome linked list', function() {
        const node1 = new ListNode(1);
        const node2 = new ListNode(2);
        const node3 = new ListNode(2);
        const node4 = new ListNode(1);
        node1.next = node2;
        node2.next = node3;
        node3.next = node4;
        expect(isPalindrome(node1)).toBe(true);
    });

    it('should return false for a non-palindrome linked list', function() {
        const node1 = new ListNode(1);
        const node2 = new ListNode(2);
        node1.next = node2;
        expect(isPalindrome(node1)).toBe(false);
    });
});