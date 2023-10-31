class Solution {
  subarraySum(arr, n, s) {
    let start = 0;
    let end = 0;
    let currentSum = 0;

    while (end <= n) {
      while (currentSum > s && start < end) {
        currentSum -= arr[start];
        start++;
      }

      if (currentSum === s) {
        return [start + 1, end];
      }

      if (end < n) {
        currentSum += arr[end];
        end++;
      } else {
        break;
      }
    }

    return -1;
  }
}
const nuns = [
  142112, 54, 69, 148, 45, 63, 158, 38, 60, 124, 142, 130, 179, 117, 36, 191,
  43, 89, 107, 41, 143, 65, 49, 47, 6, 91, 130, 171, 151, 7, 102, 194, 149, 30,
  24, 85, 155, 157, 41, 167, 177, 132, 109, 145, 40, 27, 124, 138, 139, 119, 83,
  130, 142, 34, 116, 40, 59, 105, 131, 178, 107, 74, 187, 22, 146, 125, 73, 71,
  30, 178, 174, 98, 113,
];
const result = new Solution().subarraySum(nuns, 74, 665);
console.log(result);
//console.log(new Solution().subarraySum([1, 2, 3, 7, 5], 5, 12));
