const { modifyArray } = require('../../assignment/Arrays/modifyArray');


describe('modifyArray', function() {
    it('should insert value at the specified index', function() {
        const inputArray = [10, 20, 30];
        const index = 1;
        const value = 15;
        const expectedArray = [10, 15, 20, 30];
        
        const result = modifyArray(inputArray, index, value);
        
        expect(result).toEqual(expectedArray);
    });

    it('should add value at the end if index is out of range', function() {
        const inputArray = [10, 20, 30];
        const index = 5;
        const value = 40;
        const expectedArray = [10, 20, 30, 40];
        
        const result = modifyArray(inputArray, index, value);
        
        expect(result).toEqual(expectedArray);
    });
});