const { deleteDuplicates, ListNode } = require('../../assignment/SinglyLinkedList/deleteDuplicates');


describe('deleteDuplicates', function() {
    it('should remove duplicates from sorted linked list', function() {
        const head = new ListNode(1, new ListNode(1, new ListNode(2)));
        const result = deleteDuplicates(head);
        
        let current = result;
        let values = [];
        while (current !== null) {
            values.push(current.val);
            current = current.next;
        }
        
        expect(values).toEqual([1, 2]);
    });
});