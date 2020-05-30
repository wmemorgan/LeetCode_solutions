/**
 * @param {string[]} strs
 * @return {string[][]}
 */

// Map the sorted strings to a hashtable and store the word in an array

var groupAnagrams = function (strs) {
	const map = {};
	for (let word of strs) {
		let sortedWord = word.split("").sort().join("");

		if (!map.hasOwnProperty(sortedWord)) {
			map[sortedWord] = [word];
		} else {
			map[sortedWord].push(word);
		}
	}

	return Object.values(map);
};
