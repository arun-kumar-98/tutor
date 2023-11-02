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
 * @return {number}
 */
var averageOfSubtree = function (root) {
  let result = { val: 0 };
  solve(root, result);
  return result.val;
};

function sum(root, count) {
  if (root === null) {
    return 0;
  }
  count.val++;

  let leftSum = sum(root.left, count);
  let rightSum = sum(root.right, count);

  return root.val + leftSum + rightSum;
}

function solve(root, result) {
  if (root === null) {
    return;
  }

  let count = { val: 0 };

  let totalSum = sum(root, count);

  if (Math.floor(totalSum / count.val) === root.val) {
    result.val++;
  }

  solve(root.left, result);
  solve(root.right, result);
}
