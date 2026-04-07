// Minimum and Maximum
// Instructions
// Implement a function findMinMax that takes an array of numbers and returns an object with the smallest and largest numbers.

// Example: findMinMax([3, 5, 7, 2, 8]) should return { min: 2, max: 8 }.

// Hint: Use a loop to keep track of the smallest and largest numbers or apply Math.min and Math.max.
function findMinMax(arr) {
    let min = Math.min(...arr);
    let max = Math.max(...arr);
    return { min, max };
}
module.exports = { findMinMax };