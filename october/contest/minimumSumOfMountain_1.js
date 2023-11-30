/**
 * @param {number[]} nums
 * @return {number}
 */

//todo::: correct this code with optimal solution

// var minimumSum = function (nums) {
//   if (nums.length < 3) {
//     return -1; // Not enough elements for a triplet.
//   }

//   let minSum = Number.MAX_SAFE_INTEGER; // Initialize with a large value

//   for (let j = 1; j < nums.length - 1; j++) {
//     let i = j - 1;
//     let k = j + 1;

//     if (i < j && j < k) {
//       if (nums[i] < nums[j] && nums[k] < nums[j]) {
//         let currentSum = nums[i] + nums[j] + nums[k];
//         minSum = Math.min(minSum, currentSum);
//       }
//       // Check if it's a mountain.
//     }
//   }

//   return minSum === Number.MAX_SAFE_INTEGER ? -1 : minSum;
// };
//};

var minimumSum = function (nums) {
  const n = nums.length;

  const l = new Array(n);
  const r = new Array(n);

  //checking minimum element in left array

  l[0] = nums[0];
  for (let i = 1; i < n; i++) {
    l[i] = Math.min(l[i - 1], nums[i]);
  }

  //checking minimum element in right array

  r[n - 1] = nums[n - 1];
  for (let i = n - 2; i >= 0; i--) {
    r[i] = Math.min(r[i + 1], nums[i]);
  }

  let mn = Infinity;

  for (let i = 1; i < n - 1; i++) {
    if (l[i] < nums[i] && r[i] < nums[i]) {
      mn = Math.min(mn, l[i] + nums[i] + r[i]);
    }
  }
  return mn === Infinity ? -1 : mn;
};
console.log(minimumSum([5, 4, 8, 7, 10, 2]));
