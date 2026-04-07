const { sumArray } = require('../../assignment/Arrays/sumArray ');

describe('sumArray function', function() {
    it('should return the sum of all elements in the array', function() {
        const arr = [1, 2, 3, 4, 5];
        expect(sumArray(arr)).toEqual(15);
    });

    it('should return 0 for an empty array', function() {
        const arr = [];
        expect(sumArray(arr)).toEqual(0);
    });

    it('should return the element itself for a single element array', function() {
        const arr = [10];
        expect(sumArray(arr)).toEqual(10);
    });
});