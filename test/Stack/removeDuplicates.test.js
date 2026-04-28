const { removeDuplicates } = require('../../assignment/Stack/removeDuplicates');

describe('removeDuplicates', function() {
    it('should remove duplicates in a string', function() {
        const result1 = removeDuplicates("abbaca");
        expect(result1).toEqual("ca");
        
        const result2 = removeDuplicates("azxxzy");
        expect(result2).toEqual("ay");
    });
    
    it('should return empty string if all characters are duplicates', function() {
        const result = removeDuplicates("aaaaa");
        expect(result).toEqual("a");
    });
    
    it('should handle empty string input', function() {
        const result = removeDuplicates("");
        expect(result).toEqual("");
    });
});