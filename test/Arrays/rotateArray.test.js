const { rotateArray } = require('../../assignment/Arrays/rotateArray');

describe('rotateArray', function() {
    it('should rotate array elements correctly when k is less than array length', function() {
        let arr = [1, 2, 3, 4, 5];
        rotateArray(arr, 2);
        expect(arr).toEqual([4, 5, 1, 2, 3]);
    });

    it('should not rotate array when k is 0', function() {
        let arr = [1, 2, 3, 4, 5];
        rotateArray(arr, 0);
        expect(arr).toEqual([1, 2, 3, 4, 5]);
    });

    it('should rotate array elements correctly when k is greater than array length', function() {
        let arr = [1, 2, 3, 4, 5];
        rotateArray(arr, 7);
        expect(arr).toEqual([4, 5, 1, 2, 3]);
    });
});