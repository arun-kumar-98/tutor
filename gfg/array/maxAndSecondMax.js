class Solution {
  largestAndSecondLargest(sizeOfArray, arr) {
    // const s = new Set(arr);
    // const a = [...s].sort((a, b) => a - b);
    // console.log(a);
    // let max1 = a[a.length - 1];
    // console.log(max1);
    // let max2 = a[a.length - 2];
    // console.log(max2);
    // if (max1 === max2) return [max1, -1];
    // return [max1, max2];

    let max1 = Math.max(arr[0], arr[1]);
    let max2 = Math.max(arr[0], arr[1]);
    if (sizeOfArray < 2) {
      return [arr[0], -1];
    }

    for (let i = 2; i < sizeOfArray; i++) {
      if (arr[i] > max1) {
        max2 = max1;
        max1 = arr[i];
      }
      //if ith element greater than max2
      else if (arr[i] > max2 && arr[i] != max1) {
        max2 = arr[i];
      }
    }
    return [max1, max2];
  }
}

let ans = new Solution().largestAndSecondLargest(3, [2, 1, 2]);
console.log(ans);
