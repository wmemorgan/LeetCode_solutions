/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function (nums, target) {
    // Iterate through 'nums' array
    for (let i = 0; i < nums.length; i++) {
        // Calculate the difference between the element and the target
        let difference = target - nums[i]
        // Find the difference in the array
        let diffIndex = nums.indexOf(difference, i+1)
        // If the difference exists
        if (diffIndex !== -1) {
            // extract and return the indices of element and difference
            return [i, diffIndex]
        }
    }
    return 'No solution'
};

// const nums = [2, 7, 11, 15] // [0, 1]
// const target = 9
const nums = [3, 3]
const target = 6
console.log(twoSum(nums, target))
