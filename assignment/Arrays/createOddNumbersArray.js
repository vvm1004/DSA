// Create and Manipulate Arrays
// Instructions


// Implement a function createOddNumbersArray(n) that takes a positive integer n and returns an array containing the first n odd numbers.

// Example: createOddNumbersArray(5) should return [1, 3, 5, 7, 9].

// Hint: Start from 1 and keep adding 2 until you have n elements.


function createOddNumbersArray(n) {
    let result = [];
    for (let i = 0; i < n; i++) {
        result.push(2 * i + 1); // Generates odd numbers starting from 1
    }
    return result;
}

module.exports = { createOddNumbersArray };
