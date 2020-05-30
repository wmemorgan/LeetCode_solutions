/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
// Identify longest and shortest lists
// Map longest list to hashtable
// Declare minSumIndex variable
// Declare matchingRestos array
// Iterate through shortest list
// Get sum of current index and index of longest list
// Compare sum to minSumIndex
// If !minSumIndex or sum < minSumIndex replace minSumIndex with sum
// If sum === minSumIndex push to matchingRestos
// Else If sum < minSumIndex
// replace matchingRestos
// replace minSumIndex with sum
// return matchingRestos
var findRestaurant = function (list1, list2) {
	const map = {};
	const longList = list1.length >= list2.length ? list1 : list2;
	const shortList = list1.length < list2.length ? list1 : list2;
	let minSumIndex;
	let matchingRestos = [];

	for (let i = 0; i < longList.length; i++) {
		map[longList[i]] = i;
	}

	for (let i = 0; i < shortList.length; i++) {
		if (map.hasOwnProperty(shortList[i])) {
			let sum = i + map[shortList[i]];
			if (minSumIndex === undefined) {
				minSumIndex = sum;
			}

			if (sum === minSumIndex) {
				matchingRestos.push(shortList[i]);
			} else if (sum < minSumIndex) {
				matchingRestos = [shortList[i]];
				minSumIndex = sum;
			}
		}
	}

	return matchingRestos;
};
