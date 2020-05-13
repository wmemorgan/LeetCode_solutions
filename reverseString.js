/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */

/*
1. Can I restate the problem in my own words?
    REVERSE A STRING BY MODIFYING THE ORIGINAL INPUT STRING
2. What are the input that go into the problem?
    - Confirm required data types (string, integers, floats, arrays, objects)
    STRING
	- Can negative numbers be included? NO
  - Confirm upper/lowercase enforcement YES
	- Confirm whitespace and punctuation NO
	- Confirm if each argument must be the same length (strings and arrays) NO
    - Confirm upper and lower bound limits of integers and floating points 
        NOT SPECIFIED
3. What are the outputs that should come from the solution to the problem?
	- Identify data types for output(s) STRING
4. Can the outputs be determined from the inputs? YES
5. Any time or space constraints with the solution?*** DO A NAIVE/BRUTE FORCE SOLUTION FIRST
    SPACE COMPLEXITY - O(1)
6. How should I label the important pieces of data that are part of the problem?
*/

var reverseString = function (s) {
    // Edge case check for empty and single letter input
    if (s.length <= 1) return s

    // Declare left position
    let left = 0
    // Identify midpoint position
    const midpoint = left + ((s.length-1) - left)/2

    // Iterate through input (for let right = s.length - 1; right >= midpoint; right--)
    for (let right = s.length - 1; right >= midpoint; right--) {
        // Swap characters
        let temp = s[right]
        s[right] = s[left]
        s[left] = temp
        // Increment left position
        left++
    }

    // Return input
    return s
};

// const input = ["h", "e", "l", "l", "o"]
const input = ["A", " ", "m", "a", "n", ",", " ", "a", " ", "p", "l", "a", "n", ",", " ", "a", " ", "c", "a", "n", "a", "l", ":", " ", "P", "a", "n", "a", "m", "a"]
console.log(reverseString(input))