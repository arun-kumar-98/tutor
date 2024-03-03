class Solution {
  //Function to rotate an array by d elements in counter-clockwise direction.
  rotateArr(arr, d, n) {
    console.log("arr th place value ", arr.length);
    // code here

    const temp = [];
    for (let i = 0; i < d; i++) {
      temp.push(arr[i]);
    }
    console.log(temp[temp.length - 1]);

    console.log("temp arrray  ", temp);
    //starting for i=k

    for (let i = d; i < n; i++) {
      console.log("ith ", i);
      console.log("here  in shifting the array    ", i - d, arr[i]);
      arr[i - d] = arr[i];
    }

    //set back temp arr in arr

    for (let i = n - d, j = 0; i < n; i++, j++) {
      arr[i] = temp[j];
    }
    console.log("arr ", arr);
    return arr;
  }
}

let d = 47;
let n = 77;
const arr = [
  25, 6, 20, 55, 69, 5, 50, 63, 61, 41, 87, 80, 2, 96, 77, 70, 12, 43, 31, 8,
  64, 41, 68, 18, 95, 79, 52, 74, 1, 98, 3, 26, 3, 74, 32, 23, 79, 81, 37, 39,
  21, 24, 18, 22, 71, 47, 44
];

let ans = new Solution().rotateArr(arr, d, n);
console.log(ans);
