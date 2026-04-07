const { reverseArray } = require('../../assignment/Arrays/reverseArray');

describe('reverseArray', function() {
    it('should return an array with elements in reverse order', function() {
        var arr = [1, 2, 3, 4];
        var reversedArr = reverseArray(arr);
        expect(reversedArr).toEqual([4, 3, 2, 1]);
    });

    it('should return an empty array when input array is empty', function() {
        var arr = [];
        var reversedArr = reverseArray(arr);
        expect(reversedArr).toEqual([]);
    });

    it('should return the same array when input array has only one element', function() {
        var arr = [5];
        var reversedArr = reverseArray(arr);
        expect(reversedArr).toEqual([5]);
    });
});