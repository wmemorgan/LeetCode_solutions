/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
// Create a hashtable of letters mapping letters of s to letters of t
// Iterate through t string
// if char of t is not in hashtable return false
// return true
var isIsomorphic = function (s, t) {
	const map = {};
	let word = "";
	for (let i = 0; i < s.length; i++) {
		if (!map.hasOwnProperty(s[i])) {
			map[s[i]] = t[i];
		} else if (map[s[i]] !== t[i]) {
			return false;
		}
	}

	for (let char of Object.values(map)) {
		if (countOccurences(Object.values(map), char) > 1) return false;
	}

	return true;
};

function countOccurences(str, char) {
	let count = 0;
	for (let c of str) {
		if (c === char) count++;
	}

	return count;
}
