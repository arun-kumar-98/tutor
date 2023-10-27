/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var kthGrammar = function (n, k) {
  //base case

  if (k === 1 && n === 1) return 0;

  ///find length

  let length = Math.pow(2, n - 1);
  //mid

  let mid = Math.floor(length / 2);

  if (k <= mid) {
    return kthGrammar(n - 1, k);
  }
  return 1 - kthGrammar(n - 1, k - mid);
};

console.log(kthGrammar(2, 2));
