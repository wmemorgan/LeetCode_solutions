/**
 * @param {string} s
 * @return {number}
 */
// Map char, index, and occurrence
// Enumerate map and filter by occurrence
// Return letter with lowest index
var firstUniqChar = function (s) {
	const map = {};
	for (let i = 0; i < s.length; i++) {
		if (!map.hasOwnProperty(s[i])) {
			map[s[i]] = { index: i, occurrence: 1 };
		} else {
			map[s[i]]["occurrence"]++;
		}
	}

	const uniqueChars = findUniqueChar(map, "occurrence", "index");

	return uniqueChars.length > 0 ? uniqueChars[0][1]["index"] : -1;
};

function findUniqueChar(obj, filterParam, sortParam) {
	const filteredEntries = Object.entries(obj)
		.filter((char) => char[1][filterParam] === 1)
		.sort((a, b) => a[1][sortParam] - b[1][sortParam]);

	return filteredEntries;
}
