/**
 *
 */

class Solution {
  digitalRoot(n) {
    if (n <= 9) {
      return n;
    }
    let sum = 0;

    ///Iterate each number and sum

    while (n > 0) {
      sum += n % 10;
      n = Math.floor(n / 10);
    }

    return this.digitalRoot(sum);
  }
}

console.log(new Solution().digitalRoot(1));
