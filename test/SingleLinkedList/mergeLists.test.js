const { mergeLists, SinglyLinkedListNode } = require('../../assignment/SinglyLinkedList/mergeLists');


describe('mergeLists', function() {
    it('should merge two sorted linked lists into a single sorted linked list', function() {
        let list1 = new SinglyLinkedListNode(1);
        list1.next = new SinglyLinkedListNode(3);
        list1.next.next = new SinglyLinkedListNode(7);

        let list2 = new SinglyLinkedListNode(1);
        list2.next = new SinglyLinkedListNode(2);

        let mergedList = mergeLists(list1, list2);

        let expectedList = [1, 1, 2, 3, 7];
        let current = mergedList;
        let index = 0;

        while (current !== null) {
            expect(current.data).toEqual(expectedList[index]);
            current = current.next;
            index++;
        }
    });

    it('should handle empty lists', function() {
        let list1 = null;
        let list2 = new SinglyLinkedListNode(1);

        let mergedList = mergeLists(list1, list2);

        let expectedList = [1];
        let current = mergedList;
        let index = 0;

        while (current !== null) {
            expect(current.data).toEqual(expectedList[index]);
            current = current.next;
            index++;
        }
    });
});