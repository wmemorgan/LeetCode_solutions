/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
	// Flag if negative
	const isNegative = x < 0 ? true : false;
	// Extract absolute value of input
	// Split input into an array
	let inputArr = Math.abs(x).toString().split("");
	// Find array midpoint
	const midpoint = Math.floor(inputArr.length / 2);
	// Initialize start=0 and end=array.length -1 indices
	let start = 0;
	let end = inputArr.length - 1;
	// Loop while start index is less than midpoint and end index is greater than midpoint
	while (start < midpoint && end >= midpoint) {
		// Swap start and end numbers with each other
		let temp = inputArr[start];
		inputArr[start] = inputArr[end];
		inputArr[end] = temp;
		start++;
		end--;
	}

	// Recombine number
	let reversedInteger = Number(inputArr.join(""));
	let intOverflow;
	reversedInteger = reversedInteger;

	// Return final number and convert to negative flag if appropriate
	return isNegative
		? intOverFlow(-reversedInteger)
		: intOverFlow(reversedInteger);
};

function intOverFlow(num) {
	const lowerBound = -(2**31);
	const upperBound = (2**31) - 1;
	if (num < lowerBound || num > upperBound) {
		return 0;
	}

	return num;
}

let num = -1234;
console.log(reverse(num));
