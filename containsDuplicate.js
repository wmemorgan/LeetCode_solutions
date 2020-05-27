/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
	const map = new Set();
	for (let num of nums) {
		if (map.has(num)) return true;
		else map.add(num);
	}

	return false;
};
