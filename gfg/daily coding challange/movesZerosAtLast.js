class Solution {
  pushZerosToEnd(arr, n) {
    let index = 0;

    for (let i = 0; i < n; i++) {
      //check non zero element

      if (arr[i] != 0) {
        arr[index] = arr[i];
        index++;
      }
    }

    for (let i = index; i < n; i++) {
      arr[i] = 0;
    }
    return arr;
  }
}

console.log(new Solution().pushZerosToEnd([3, 5, 0, 0, 4], 5));
