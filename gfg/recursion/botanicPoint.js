// class Solution {
//   botanicPoint(arr, n) {
//     let max = arr[0];
//     for (let i = 1; i <= n; i++) {
//       if (arr[i] > max) {
//         max = arr[i];
//       }
//     }
//     return max;
//   }
// }

// console.log(
//   new Solution().botanicPoint([1, 15, 25, 45, 42, 21, 17, 12, 11], 9)
// );
// console.log(new Solution().botanicPoint([1, 45, 47, 50, 5], 5));

/***
 *
 *
 *
 * Using Binary Search
 *
 * Time & Space==O(logn)&O(1)
 */

class Solution {
  findMaximum(arr) {
    let low = 0;
    let n = arr.length;
    let high = arr.length - 2;
    if (n == 1) return arr[0];
    if (arr[0] > arr[1]) return arr[0];
    if (arr[n - 1] > arr[n - 2]) return arr[n - 1];
    while (low <= high) {
      let mid = Math.floor(low + (high - low) / 2);

      if (arr[mid] > arr[mid - 1] && arr[mid] > arr[mid + 1]) {
        // it can be also  if(arr[mid]>arr[mid+1])
        return arr[mid];
      } else if (arr[mid] < arr[mid + 1]) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }
    return -1;
  }
}
console.log(new Solution().findMaximum([1, 15, 25, 45, 42, 21, 17, 12, 11], 9));
console.log(new Solution().findMaximum([1, 45, 47, 50, 5], 5));
