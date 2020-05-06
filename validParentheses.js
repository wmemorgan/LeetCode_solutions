/*
1. Can I restate the problem in my own words?
    VERIFY BRACKETS ARE BEING PROPERLY ENCLOSED
2. What are the input that go into the problem?
    - Confirm required data types (string, integers, floats, arrays, objects)
    STRINGS
    - Can negative numbers be included? 
    NO
    - Confirm upper/lowercase enforcement 
    N/A
    - Confirm whitespace and punctuation 
    YES (BRACES AND WHITESPACE)
    - Confirm if each argument must be the same length (strings and arrays)
    NO
    - Confirm upper and lower bound limits of integers and floating points
    EMPTY STRING CONSIDERED VALID
3. What are the outputs that should come from the solution to the problem?
	- Identify data types for output(s) BOOLEAN
4. Can the outputs be determined from the inputs? YES
5. Any time or space constraints with the solution?*** DO A NAIVE/BRUTE FORCE SOLUTION FIRST
6. How should I label the important pieces of data that are part of the problem?
    openBrackets (array); closedBrackets (array); stack (array); 
*/

/**
 * @param {string} s
 * @return {boolean}
 */

 /*----MY SOLUTION ATTEMPT 1----*/
var isValid = function (s) {
    // Edge case check EMPTY STRING: return TRUE
    if (s.length === 0) {
        return true
    }
    // Create openBracket and closeBracket arrays
    const openBracket = ['(', '[', '{']
    const closeBracket = [')', ']', '}']
    // Create a stack to keep track of proper brackets
    const stack = []
    // Iterate through string
    for (let char of s) {
        // Check for open bracket
        // If present
        if (openBracket.indexOf(char) !== -1) {
            // add to stack
            stack.push(char)
        }
        // Check for closed bracket
        // If present
        else if (closeBracket.indexOf(char) !== -1) {
            // Confirm matching indices of corresponding openBracket array
            // AND that openBracket is at the top of the stack
            // IF NOT
            if (closeBracket.indexOf(char) !== openBracket.indexOf(stack[stack.length - 1])) {
                return false
            } else {
                stack.pop()
            }
        }
        // RINSE AND REPEAT
    }
    // IF iteration completes with empty stack
        // return TRUE
    // ELSE
        // return FALSE
    return stack.length === 0
};

// const input = "()"
// const input = "()[]{}"
const input = "(]"
console.log(isValid(input))