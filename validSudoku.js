/**
 * @param {character[][]} board
 * @return {boolean}
 */
// Track validation state
let isValid = true;
var isValidSudoku = function (board) {
	// Validate rows
	for (let row = 0; row < board.length; row++) {
		validate(board[row]);
	}

	// Validate columns
	for (let col = 0; col < board[0].length; col++) {
		let nums = [];

		for (let x = 0; x < board.length; x++) {
			nums.push(board[x][col]);
		}

		validate(nums);
	}

	// Validate box
	for (let row = 0; row < board.length; row += 3) {
		let nums = [];
		for (let col = 0; col < board[0].length; col += 3) {
			for (let x = 0; x < 3; x++) {
				for (let y = 0; y < 3; y++) {
					nums.push(board[row + x][col + y]);
				}
			}
			validate(nums);
		}
	}

	return isValid;
};

function validate(nums) {
	nums = nums
		.filter((cell) => cell !== ".")
		.map((num) => Number(num))
		.sort((a, b) => a - b);

	for (let k = 0; k < nums.length - 1; k++) {
		if (nums[k] === 5) {
			console.log(`nums ${nums}`);
			console.log(nums[k], nums[k + 1]);
		}
		if (nums[k] === nums[k + 1]) {
			valid = false;
		}
	}
}

/**
 * Existing Solution
 * https://leetcode.com/problems/valid-sudoku/discuss/182066/Straightforward-Javascript-Solution
 */
var isValidSudoku = function (board) {
	let valid = true;

	const validate = (digits) => {
		digits = digits
			.filter((v) => v !== ".")
			.map((n) => Number(n))
			.sort((a, b) => a - b);

		for (let k = 0; k < digits.length - 1; k++) {
			if (digits[k] === digits[k + 1]) {
				valid = false;
			}
		}
	};

	// validate rows
	for (let r = 0; r < board.length; r++) {
		let digits = board[r];

		validate(digits);
	}

	// validate cols
	for (let c = 0; c < board[0].length; c++) {
		let digits = [];

		for (let k = 0; k < board.length; k++) {
			digits.push(board[k][c]);
		}

		validate(digits);
	}

	// validate 3x3
	for (let r = 0; r < board.length; r += 3) {
		for (let c = 0; c < board[0].length; c += 3) {
			let digits = [];
			for (let k = 0; k < 3; k++) {
				for (let n = 0; n < 3; n++) {
					digits.push(board[r + k][c + n]);
				}
			}

			validate(digits);
		}
	}

	return valid;
};