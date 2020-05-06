/*
1. Can I restate the problem in my own words?
FIND THE LONGEST COMMON PREFIX AMONG THE WORDS PROVIDED
2. What are the input that go into the problem?
    - Confirm required data types (string, integers, floats, arrays, objects)
    STRING
	- Can negative numbers be included? NO
  - Confirm upper/lowercase enforcement LOWERCASE
	- Confirm whitespace and punctuation NO WHITESPACE OR PUNCTATION
    - Confirm if each argument must be the same length (strings and arrays)
    VARIABLE LENGTH
    - Confirm upper and lower bound limits of integers and floating points
    LOWER: 'a' UPPER: 'z'
3. What are the outputs that should come from the solution to the problem?
    STRING OF LETTERS
	- Identify data types for output(s)
4. Can the outputs be determined from the inputs? YES
5. Any time or space constraints with the solution?*** DO A NAIVE/BRUTE FORCE SOLUTION FIRST
6. How should I label the important pieces of data that are part of the problem?
    strs (string), prefix (string), counter (integer), charMap (object or arr)??
*/

/**
 * @param {string[]} strs
 * @return {string}
 */

/*----OFFICIAL SOLUTION 1----*/
var longestCommonPrefix = function (strs) {
    if (strs.length === 0) {
        return ""
    }

    let prefix = strs[0]

    for (let word of strs) {
        console.log(`word.indexOf(prefix) ${word.indexOf(prefix)}`)
        while (word.indexOf(prefix) != 0) {
            prefix = prefix.substring(0, prefix.length-1)
            console.log(`prefix`, prefix)
            if (prefix.length === 0) {
                return ""
            }
        }
    }
    
    return prefix
} 

 /*----MY SOLUTION ATTEMPT 1----
var longestCommonPrefix = function (strs) {
    // Edge case check non-empty array
    if (strs.length === 0) {
        return ""
    }
	// Initialize charMap save all the characters of the shortest word inside charMap
	const charMap = findShortestWord(strs).split('');
	// Initialize prefix
	const prefix = {};
	
	// Iterate through array
    for (let word of strs) {
        if (word[0] !== charMap[0]) {
            // Return empty string
            return "";
        }
		for (let i = 0; i < charMap.length; i++) {
            // If letter in word does not match characters in charMap
            console.log(`compare letters ${word[i]} and ${charMap[i]}`)
            // Add character to prefix object
            if (prefix.hasOwnProperty(word[i])) {
                prefix[word[i]]++
            } else {
                prefix[word[i]] = 1
            }
		}
	}
    // Return prefix in string format
    const result = charMap.filter(char => prefix[char] === strs.length).join('')
    console.log(`prefix: ${result}`)
    return result
};

function findShortestWord(words) {
	let shortestWord = words[0];
	for (let word of words) {
		if (word.length < shortestWord.length) {
			shortestWord = word;
		}
	}
    console.log(`shortest word: ${shortestWord}`)
	return shortestWord;
}
*/

// const input = ["flower", "flow", "flight"]
// const input = ["dog", "racecar", "car"]
const input = ["aa", "aa"]
console.log(longestCommonPrefix(input))