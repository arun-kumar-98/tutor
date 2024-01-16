class Solution {
  seriesSum(n) {
    let result = 0;
    // code here

    result = (n * (n + 1)) / 2;

    return result;
  }
}

console.log(new Solution().seriesSum(5));
