const { twoSum } = require('../../assignment/Arrays/twoSum');

describe('twoSum', function() {
    it('should return indices of two numbers that add up to the target', function() {
        const nums = [2, 7, 11, 15];
        const target = 9;
        const result = twoSum(nums, target);
        expect(result).toEqual([0, 1]);
    });

    it('should return empty array if no solution is found', function() {
        const nums = [2, 7, 11, 15];
        const target = 10;
        const result = twoSum(nums, target);
        expect(result).toEqual([]);
    });
});