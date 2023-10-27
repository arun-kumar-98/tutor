/**
 * @param {number[]} arr
 * @return {number}
 */
var numFactoredBinaryTrees = function (arr) {
  const n = arr.length;
  const MOD = 1e9 + 7;
  arr.sort((a, b) => a - b);
  const map = new Map();
  const dp = new Array(n).fill(1);

  for (let i = 0; i < n; i++) {
    // Fixed the typo here
    map.set(arr[i], i);
  }

  for (let i = 0; i < n; i++) {
    // Fixed the typo here
    for (let j = 0; j < i; j++) {
      if (arr[i] % arr[j] === 0) {
        const factor = Math.floor(arr[i] / arr[j]);
        if (map.has(factor)) {
          let k = map.get(factor);
          dp[i] = (dp[i] + dp[j] * dp[k]) % MOD;
        }
      }
    }
  }

  let ans = 0;
  for (let i = 0; i < n; i++) {
    ans = (ans + dp[i]) % MOD;
  }
  return ans;
};
/**
 * @param {number[]} arr
 * @return {number}
 */
// var numFactoredBinaryTrees = function (arr) {
//   const n = arr.length;
//   // 1. Sort the array to easily find its elements for the root element
//   const MOD = 1000000007;
//   arr.sort((a, b) => a - b);
//   // 2. Map to store the count of elements
//   const map = new Map();

//   map.set(arr[0], 1);
//   let ans = 0;

//   for (let i = 1; i < n; i++) {
//     let root = arr[i];
//     map.set(root, 1);

//     for (let j = 0; j < i; j++) {
//       // left child
//       let lc = arr[j];
//       // right child
//       let rc = map.get(root / lc);

//       if (root % lc === 0 && rc) {
//         map.set(root, (map.get(root) + lc * rc) % MOD); // Corrected this line
//       }
//     }
//     ans = (ans + map.get(root)) % MOD;
//   }

//   return ans;
// };

console.log(numFactoredBinaryTrees([2, 4])); // Output: 3

//console.log(numFactoredBinaryTrees([2, 4, 5, 10])); // Output: 7
