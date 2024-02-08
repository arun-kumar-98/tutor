/****
 *
 *
 * @param{number}
 * @returns{boolean}
 */
let counter = 2;
class Solution {
  isLucky(n) {
    if (counter > n) {
      return 1;
    }
    if (n % counter === 0) {
      return 0;
    }
    //updat the position of n
    let np = n;
    np = np - Math.floor(np / counter);
    //increment the counter
    counter++;

    return this.isLucky(np);
  }
}

console.log(new Solution().isLucky(19));
