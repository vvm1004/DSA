const { findMinMax } = require('../../assignment/Arrays/findMinMax');

describe('findMinMax', function() {
    it('should return min and max values of an array', function() {
        const result = findMinMax([1, 2, 3, 4, 5]);
        expect(result).toEqual({ min: 1, max: 5 });
    });

    it('should return min and max values of a negative array', function() {
        const result = findMinMax([-5, -3, -1, -2, -4]);
        expect(result).toEqual({ min: -5, max: -1 });
    });

    it('should return min and max values of an array with duplicates', function() {
        const result = findMinMax([5, 5, 5, 5, 5]);
        expect(result).toEqual({ min: 5, max: 5 });
    });
});