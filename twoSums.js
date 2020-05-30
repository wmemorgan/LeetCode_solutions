/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

/**
 * MY 2ND APPROACH
 * Using Hashtable
 */
var twoSum = function (nums, target) {
	// Edge case: empty array
	if (!nums || nums.length === 0) return null;

	const map = {};

	for (let i = 0; i < nums.length; i++) {
		map[nums[i]] = i;
	}

	for (let i = 0; i < nums.length; i++) {
		let diff = target - nums[i];
		if (map.hasOwnProperty(diff) && map[diff] !== i) return [i, map[diff]];
	}

	return null;
};


 /**
  * MY 1ST APPROACH
  */
// const twoSum = function (nums, target) {
//     // Iterate through 'nums' array
//     for (let i = 0; i < nums.length; i++) {
//         // Calculate the difference between the element and the target
//         let difference = target - nums[i]
//         // Find the difference in the array
//         let diffIndex = nums.indexOf(difference, i+1)
//         // If the difference exists
//         if (diffIndex !== -1) {
//             // extract and return the indices of element and difference
//             return [i, diffIndex]
//         }
//     }
//     return 'No solution'
// };

// const nums = [2, 7, 11, 15] // [0, 1]
// const target = 9
const nums = [3, 3]
const target = 6
console.log(twoSum(nums, target))
