/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findMatrix = function (nums) {
  const map = new Map();

  const ans = [];

  for (let num of nums) {
    let freq = map.get(num) || 0;

    if (!ans[freq]) {
      ans[freq] = [];
    }
    ans[freq].push(num);
    map.set(num, freq + 1);
  }
  return ans;
};

const nums = [1, 3, 4, 1, 2, 3, 1];

console.log(findMatrix(nums));
