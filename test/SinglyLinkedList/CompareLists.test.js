const { CompareLists } = require('../../assignment/SinglyLinkedList/CompareLists');


describe('CompareLists', function() {
    it('should return 0 if lists are not equal', function() {
        const llist1 = { data: 1, next: { data: 2, next: null } };
        const llist2 = { data: 1, next: null };
        expect(CompareLists(llist1, llist2)).toEqual(0);
    });

    it('should return 1 if lists are equal', function() {
        const llist1 = { data: 1, next: { data: 2, next: null } };
        const llist2 = { data: 1, next: { data: 2, next: null } };
        expect(CompareLists(llist1, llist2)).toEqual(1);
    });

    it('should return 0 if lists have different lengths', function() {
        const llist1 = { data: 1, next: { data: 2, next: null } };
        const llist2 = { data: 1, next: { data: 2, next: { data: 3, next: null } } };
        expect(CompareLists(llist1, llist2)).toEqual(0);
    });
});