/*
1. Can I restate the problem in my own words?
    TAKE A ROMAN NUMERAL BETWEEN 1 AND 3999 AND CONVERT IT TO AND INTEGER
2. What are the input that go into the problem?
    - Confirm required data types (string, integers, floats, arrays, objects)
    STRINGS
	- Can negative numbers be included? NO
    - Confirm upper/lowercase enforcement UPPERCASE
	- Confirm whitespace and punctuation NONE
    - Confirm if each argument must be the same length (strings and arrays)
    VARIABLE LENGTH
    - Confirm upper and lower bound limits of integers and floating points
    LOWER BOUND: 1 UPPER BOUND: 3999
3. What are the outputs that should come from the solution to the problem?
	- Identify data types for output(s) INTEGER
4. Can the outputs be determined from the inputs? YES
5. Any time or space constraints with the solution?*** DO A NAIVE/BRUTE FORCE SOLUTION FIRST
6. How should I label the important pieces of data that are part of the problem?
    const digits = [], const romanNumerals = {}, const sum
*/

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
	// Create a hashtable of Roman Numeral values
	const romanNumerals = {
		I: 1,
		V: 5,
		X: 10,
		L: 50,
		C: 100,
		D: 500,
		M: 1000,
	};
	const digits = [];
	// Iterate through string
	for (let num of s) {
		// Match roman numeral with corresponding integer in hashtable
		// Save corresponding integers into digits array
		digits.push(romanNumerals[num]);
	}
	// Sum the numbers in the digits array
	const sum = sumRoman(digits);
	// Return sum of array
	return sum;
};
// Sum the numbers in the convertedInt array
function sumRoman(numbers) {
	// Iterate through array
	for (let i = 0; i < numbers.length; i++) {
        // Take into account values preceding V, X, L, C, D, M
        if (numbers[i] < numbers[i + 1]) {
            numbers[i] = -(numbers[i])
        }
	}

	return numbers.reduce((sum, num) => sum + num, 0);
}


const romanNum = "MCMXCIV";
console.log(romanToInt(romanNum));
