const { hasCycle } = require('../../assignment/CircularSinglyLinkedList/hasCycle');

describe('hasCycle', function() {
    it('should return true if there is a cycle in the linked list', function() {
        const node1 = { val: 3, next: null };
        const node2 = { val: 2, next: null };
        const node3 = { val: 0, next: null };
        const node4 = { val: -4, next: null };
        
        node1.next = node2;
        node2.next = node3;
        node3.next = node4;
        node4.next = node2;
        
        expect(hasCycle(node1)).toEqual(true);
    });
    
    it('should return false if there is no cycle in the linked list', function() {
        const node1 = { val: 1, next: null };
        const node2 = { val: 2, next: null };
        
        node1.next = node2;
        
        expect(hasCycle(node1)).toEqual(false);
    });
});