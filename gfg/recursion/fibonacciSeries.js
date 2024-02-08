/****
 *
 *
 *
 * @param{Number}
 *
 * @returns {Number}
 */

class Solution {
  fibonacci(n) {
    //Base Condition

    if (n === 1) return 0;
    if (n === 2) return 1;
    else {
      return new Solution().fibonacci(n - 1) + new Solution().fibonacci(n - 2);
    }
  }
}

console.log(new Solution().fibonacci(9));
