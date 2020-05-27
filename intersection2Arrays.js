/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
// Map nums1 to a set
// Iterate through nums2
// Filter out elements not in map

var intersection = function (nums1, nums2) {
	// Edge case: empty array
	if (nums1.length === 0 || nums2.length === 0) return [];

	const num1Map = new Set();
	for (let num of nums1) {
		num1Map.add(num);
	}

	const num2Map = new Set();
	for (let num of nums2) {
		num2Map.add(num);
	}

	const intersection = [];
	for (let num of num2Map.values()) {
		if (num1Map.has(num)) intersection.push(num);
	}

	return intersection;
};
