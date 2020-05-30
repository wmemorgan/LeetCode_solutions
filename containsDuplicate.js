/**
 * @param {number[]} nums
 * @return {boolean}
 */


/**
 * MY 2ND APPROACH
 * Map nums to hashtable and assign an array of indices to track occurrences
 * Declare i to 0 and j to 1
 * Filter map keys that have more than one occurrence
 * Find the difference of the indices of the remaining keys
 * Compare the difference to k
 * 	If less than or equal to return true
 * 	Else return false
 */

 var containsNearbyDuplicate = function (nums, k) {
		// Edge case empty array
		if (!nums || nums.length <= 1) return false;

		const map = {};

		for (let i = 0; i < nums.length; i++) {
			if (!map.hasOwnProperty(nums[i])) {
				map[nums[i]] = [i];
			} else {
				map[nums[i]].push(i);
			}
		}

		console.log(`map: `, map);
		const answer = getIndexDiff(map);
		console.log(`answer: `, answer);

		return answer ? answer <= k : false;
 };

 function getIndexDiff(obj) {
		const filteredObj = Object.values(obj).filter(
			(indices) => indices.length > 1
		);
		if (!filteredObj || filteredObj.length >= 1) {
			const differences = calcMinDiff(filteredObj[0]);
			return differences;
		}

		return false;
 }

 function calcMinDiff(arr) {
		// Edge case: array length less than 2
		if (arr.length < 2) return arr[0];

		let minDiff = Math.abs(arr[0] - arr[1]);
		if (arr.length === 2) return minDiff;

		for (let i = 1; i < arr.length - 1; i++) {
			minDiff = Math.min(minDiff, Math.abs(arr[i] - arr[i + 1]));
		}

		return minDiff;
 }


 /**
  * MY 1ST APPROACH
  */
// var containsDuplicate = function (nums) {
// 	const map = new Set();
// 	for (let num of nums) {
// 		if (map.has(num)) return true;
// 		else map.add(num);
// 	}

// 	return false;
// };
