/***
 *
 *
 * Use Recursion
 *
 */

class Solution {
  countDigits(n) {
    return this.countRecursive(n, 0);
  }

  //us Helper function

  countRecursive(n, count) {
    if (n <= 9) {
      return ++count;
    }
    console.log("----count----", count);
    //
    count++;
    return this.countRecursive(Math.floor(n / 10), count);
  }
}
console.log(new Solution().countDigits(110));
