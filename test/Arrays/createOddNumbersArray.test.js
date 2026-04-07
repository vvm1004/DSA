const { createOddNumbersArray } = require('../../assignment/Arrays/createOddNumbersArray');

describe('createOddNumbersArray', function() {
    it('should return the first n odd numbers in an array', function() {
        expect(createOddNumbersArray(5)).toEqual([1, 3, 5, 7, 9]);
    });

    it('should return an empty array when n is 0', function() {
        expect(createOddNumbersArray(0)).toEqual([]);
    });

    it('should return [1] when n is 1', function() {
        expect(createOddNumbersArray(1)).toEqual([1]);
    });
});