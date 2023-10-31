/**
 *
 * NAIVE APPROACH
 */
// class Solution {
//   duplicates(a, n) {
//     const ans = new Set();
//     let found = false;

//     for (let i = 0; i < n; i++) {
//       for (let j = i + 1; j < n; j++) {
//         if (a[i] === a[j]) {
//           ans.add(a[i]);
//           found = true;
//         }
//       }
//     }
//     if (!found) {
//       ans.add(-1);
//     }
//     return [...ans].sort((a, b) => a - b);
//   }
// }

// const N = 5;
// a = [0, 3, 1, 2, 0];

// const N1 = 13,
//   a1 = [3, 4, 12, 3, 12, 3, 4, 4, 12, 7, 11, 6, 5];

// const n = 10,
//   a10 = [7, 6, 8, 4, 9, 8, 4, 7, 4, 4];
// console.log(new Solution().duplicates(a10, n));

/**
 * OPTIMIZATION
 */

class Solution {
  duplicates(arr, n) {
    const map = new Map();
    const ans = new Set();
    //store all elements in map

    for (const num of arr) {
      if (map.has(num)) {
        ans.add(num);
        map.set(num, map.get(num) + 1);
      }
      map.set(num, 1);
    }
    return [...ans].sort((a, b) => a - b);
  }
}

const N = 5;
a = [0, 3, 1, 2, 0];

console.log(new Solution().duplicates(a, N));
const N1 = 13,
  a1 = [3, 4, 12, 3, 12, 3, 4, 4, 12, 7, 11, 6, 5];

console.log(new Solution().duplicates(a1, N1));

const n = 10,
  a10 = [7, 6, 8, 4, 9, 8, 4, 7, 4, 4];
console.log(new Solution().duplicates(a10, n));
