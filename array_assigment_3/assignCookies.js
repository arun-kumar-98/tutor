/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function (g, s) {
  //sort both array

  s.sort((a, b) => a - b);
  g.sort((a, b) => a - b);
  let current = 0;
  let total = 0;
  for (let num of g) {
    if (num <= s[current]) {
      total++;
      current++;
    }
  }
  return total;
};

/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function (g, s) {
  s.sort((a, b) => a - b);
  g.sort((a, b) => a - b);
  let current = 0;
  let total = 0;
  for (let num of s) {
    if (num >= g[current]) total++, current++;
  }
  return total;
};

const g = [1, 2, 3],
  s = [1, 1];
console.log(findContentChildren(g, s));
const g1 = [1, 2],
  s1 = [1, 2, 3];

console.log(findContentChildren(g1, s1));
console.log(findContentChildren([10, 9, 8, 7], [5, 6, 7, 8]));
