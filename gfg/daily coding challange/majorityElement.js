class Solution {
  majorityElement(a, size) {
    const map = new Map();
    let ans = -1;
    for (const num of a) {
      if (map.has(num)) {
        map.set(num, map.get(num) + 1);
      } else {
        map.set(num, 1);
      }
    }
    console.log(map);

    for (const [key, value] of map.entries()) {
      if (value > Math.floor(size / 2)) {
        ans = key;
      }
    }
    return ans;
  }
}

//console.log(new Solution().majorityElement([1, 2, 3], 3));
console.log(new Solution().majorityElement([3, 1, 3, 3, 2], 5));
