/**
 * @param {number} n
 * @param {number[]} left
 * @param {number[]} right
 * @return {number}
 */
var getLastMoment = function (n, left, right) {
  let ans = 0;

  //for max from left

  for (const num of left) {
    ans = Math.max(ans, num);
  }

  for (const num of right) {
    ans = Math.max(ans, n - num);
  }
  return ans;
};

const n = 4,
  left = [4, 3],
  right = [0, 1];
// console.log(getLastMoment(n, left, right));

const n1 = 7,
  left1 = [],
  right1 = [0, 1, 2, 3, 4, 5, 6, 7];
// console.log(getLastMoment(n1, left1, right1));
console.log(getLastMoment(20, [4, 7, 15], [9, 3, 13, 10]));
