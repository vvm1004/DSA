const { removeElements, ListNode } = require('../../assignment/SinglyLinkedList/removeElements');

describe('removeElements', function() {
    it('should remove all nodes with the given value from the list', function() {
        const head = new ListNode(1, new ListNode(2, new ListNode(6, new ListNode(3, new ListNode(4, new ListNode(5, new ListNode(6)))))));
        const val = 6;
        const result = removeElements(head, val);
        let current = result;
        while (current) {
            expect(current.val).not.toEqual(val);
            current = current.next;
        }
    });

    it('should return an empty list if the input list is empty', function() {
        const head = null;
        const val = 1;
        const result = removeElements(head, val);
        expect(result).toBeNull();
    });

    it('should return an empty list if all nodes have the given value', function() {
        const head = new ListNode(7, new ListNode(7, new ListNode(7, new ListNode(7))));
        const val = 7;
        const result = removeElements(head, val);
        expect(result).toBeNull();
    });
});
