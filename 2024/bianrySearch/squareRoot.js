/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  let ans = 0;

  /*
     IN LINEAR SEARCH TIME LIMIT EXCEEDED {TIME COMPLEXITY}

        for (let i = 1; i <= x; i++) {
            if (i * i <= x) {
                ans = i
            }
    
        }
    */

  let low = 1,
    high = x;

  while (low <= high) {
    let mid = low + Math.floor((high - low) / 2);
    if (mid * mid <= x) {
      ans = mid;
      low = mid + 1;
    }
    high = mid - 1;
  }

  console.log("ans ", ans);
  return Math.floor(ans);
};

console.log(mySqrt(9));
