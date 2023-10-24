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

//BFS
// var largestValues = function (root) {
//   const ans = [];
//   const queue = [];
//   if (root === null) {
//     return {};
//   }
//   queue.push(root);
//   //

//   while (queue.length > 0) {
//     let maxValue = -Infinity;

//     for (let i = 0; i < queue.length; i++) {
//       let node = queue.shift();
//       maxValue = Math.max(maxValue, node.val);
//       if (node.left != null) {
//         queue.push(node.left);
//       }
//       if (node.right != null) {
//         queue.push(node.right);
//       }
//     }
//     ans.push(maxValue);
//   }
//   return ans;
// };

// const root = [1, 3, 2, 5, 3, null, 9];
// console.log(largestValues(root));

//FOLLOW UP QUESTION
// DFS DEPTH FIRST SEARCH

var largestValues = function (root) {
  const ans = [];

  function dfs(node, depth) {
    if (node === null) {
      return;
    }

    if (depth === ans.length) {
      ans.push(node.val);
    } else {
      ans[depth] = Math.max(ans[depth], node.val);
    }
    // Recursively call dfs on the left child
    dfs(node.left, depth + 1);
    // Recursively call dfs on the right child
    dfs(node.right, depth + 1);
  }

  dfs(root, 0);
  return ans;
};
