class Solution {
  missingNumber(array, n) {
    const map = new Map();

    for (let i = 0; i < n; i++) {
      map.set(array[i], true);
    }

    console.log(map);
    for (let i = 1; i <= n; i++) {
      if (!map.has(i)) {
        return i;
      }
    }
    return -1;
  }
}
const N = 5,
  array = [1, 2, 3, 5];
console.log(new Solution().missingNumber(array, N));
