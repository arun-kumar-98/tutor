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
 * @return {number[]}
 */
var findMode = function (root) {
  const mp = new Map();

  function dfs(node) {
    if (node === null) {
      return;
    }

    dfs(node.left);
    mp.set(node.val, (mp.get(node.val) || 0) + 1);
    dfs(node.right);
  }

  dfs(root);

  const resultList = [];
  let maxFreq = 0;

  for (let [key, value] of mp.entries()) {
    if (value > maxFreq) {
      maxFreq = value;
      resultList.length = 0;
      resultList.push(key);
    } else if (value === maxFreq) {
      resultList.push(key);
    }
  }

  return resultList;
};

/***
FOLLOW UP QUESTIONS


 */
