/****
 *
 *
 * @param{number}
 * @returns{boolean}
 */
class Solution {
  constructor() {
    this.counter = 2;
  }
  isLucky(n) {
    if (this.counter > n) {
      return 1;
    }
    if (n % this.counter === 0) {
      return 0;
    }
    //updat the position of n
    let np = n;
    np = np - Math.floor(np / this.counter);
    //increment the counter
    this.counter++;

    return this.isLucky(np);
  }
}

console.log(new Solution().isLucky(19));
