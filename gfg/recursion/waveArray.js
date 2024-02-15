class Solution {
  // arr: input array
  // n: size of array
  //Function to sort the array into a wave-like array.
  convertToWave(n, arr) {
    for (let i = 1; i < n; i += 2) {
      //swwapping the values
      //to make wave array
      let temp = arr[i];
      arr[i] = arr[i - 1];
      arr[i - 1] = temp;
    }
    return arr;
  }
}

console.log(new Solution().convertToWave(5, [1, 2, 3, 4, 5]));
console.log(new Solution().convertToWave(6, [2, 4, 7, 8, 9, 10]));
