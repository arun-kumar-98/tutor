class Solution {
  maxProduct(arr, n) {
    let result = -Infinity;

    for (let i = 0; i < n - 1; i++) {
      for (let j = i + 1; j < n - 1; j++) {
        let product = 1n;

        for (let k = i; k <= j; k++) {
          product = BigInt(product * arr[k]);
        }
        result = BigInt(Math.max(result, Number(product)));
      }
    }

    return Number(result);
  }
}
console.log(new Solution().maxProduct([6, -3, -10, 0, 2], 5));
