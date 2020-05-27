/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
	const map = new Set();
	let sum = 0;

	while (n !== 1) {
		sum = digitSquares(n);

		if (map.has(sum)) return false;

		map.add(sum);
		n = sum;
	}

	return true;
};

function digitSquares(n) {
	return n
		.toString()
		.split("")
		.reduce((sum, digit) => sum + Number(digit) ** 2, 0);
}
