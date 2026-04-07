// LeetCode 1 - Two Sum
// Instructions
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.


// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]

function twoSum(nums, target) {
    // Create a hash map to store numbers and their indices
    const numMap = new Map();

    // Iterate through the array
    for (let i = 0; i < nums.length; i++) {
        // Calculate the complement
        const complement = target - nums[i];

        // Check if the complement is in the hash map
        if (numMap.has(complement)) {
            // If found, return the indices
            return [numMap.get(complement), i];
        }

        // Otherwise, store the current number and its index in the hash map
        numMap.set(nums[i], i);
    }

    // If no solution is found, return an empty array
    return [];
}

module.exports = { twoSum };