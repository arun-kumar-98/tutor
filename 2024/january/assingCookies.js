/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function (g, s) {
  const m = g.length;
  const n = s.length;
  //sort
  g.sort((a, b) => a - b);
  s.sort((a, b) => a - b);

  let i = 0,
    j = 0;

  while (i < m && j < n) {
    if (g[i] <= s[j]) {
      //satisfiable condition
      i++;
    }
    j++; //increment the cookies count
  }
  return i;
};
