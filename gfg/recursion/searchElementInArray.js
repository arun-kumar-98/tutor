class Solution {
  search(arr, N, X) {
    let low = 0;
    let high = N - 1;

    let index = 0;
    //sort the array
    arr.sort((a, b) => a - b);

    while (low <= high) {
      let mid = Math.floor((low + high) / 2);

      if (arr[mid] === X) {
        index = mid;
        break;
      }
      if (arr[mid] < X) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }
    return index;
  }
}
// 100893
// 1398
console.log(new Solution().search([1, 5, 2, 3, 4], 5, 4));
