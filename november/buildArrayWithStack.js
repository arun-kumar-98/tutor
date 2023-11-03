/**
 * @param {number[]} target
 * @param {number} n
 * @return {string[]}
 */
var buildArray = function (target, n) {
  let stream = 1;
  const ans = [];

  let i = 0;

  while (i < target.length && stream <= n) {
    ans.push("push");
    if (stream === target[i]) {
      i++;
    } else {
      ans.push("pop");
    }
    stream++;
  }
  return ans;
};
const target = [1, 3],
  n = 3;

console.log(buildArray(target, n));
