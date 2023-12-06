

/**
 * 
 * AMAZON
 */

class Solution {
  //Function to count numbers from 1 to N that have 4 as a digit.
  countX(L, R, X) {
    //your code here
    let count = 0;

    //iterate

    for (let i = L + 1; i < R; i++) {
      let currentNumber = i;

      while (currentNumber > 0) {
        let lastDigit = Math.floor(currentNumber % 10);

        if (lastDigit === X) {
          count += 1;
        }
        currentNumber = Math.floor(currentNumber / 10);
      }
    }
    return count;
  }
}

let result = new Solution().countX(10, 19, 1);

console.log("number of digit ", result);

let result1 = new Solution().countX(18, 81, 9);

console.log("number of digit ", result1);
