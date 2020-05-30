/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode[]}
 */
var findDuplicateSubtrees = function (root) {
	let count = {};
	const ans = [];

	function collect(node) {
		if (!node) return "#";

		const serial =
			node.val + "," + collect(node.left) + "," + collect(node.right);

		if (!count.hasOwnProperty(serial)) {
			count[serial] = 1;
		} else {
			count[serial]++;
		}

		if (count[serial] === 2) {
			ans.push(node);
		}

		return serial;
	}

	collect(root);
	return ans;
};
