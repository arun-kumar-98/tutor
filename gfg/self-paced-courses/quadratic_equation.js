// class Solution {
//   quadraticRoots(a, b, c) {
//     let d = Math.floor(b * b - 4 * a * c);
//     console.log("descriminant -----> ", d);

//     let sqrt_value = Math.floor(Math.sqrt(Math.abs(d)));
//     console.log("----->  ", sqrt_value);
//     const ans = [];

//     let root1 = 0,
//       root2 = 0;
//     if (d > 0) {
//       root1 = Math.floor(((-b + sqrt_value) / 2) * a);

//       root2 = Math.floor(((-b - sqrt_value) / 2) * a);

//       if (root1 < 0 && root2 < 0) {
//         ans.push(-1, -1);
//       } else {
//         ans.push(root1, root2);
//       }
//       return ans;
//     } else if (d === 0) {
//       root1 = Math.ceil(-b / (2 * a));
//       root2 = root1;
//       ans.push(root1, root2);
//     } else {
//       root1 =
//         Math.ceil(-b / (2 * a)) + " + " + Math.ceil(sqrt_value / (2 * a)) + "i";
//       root2 =
//         Math.ceil(-b / (2 * a)) + " - " + Math.ceil(sqrt_value / (2 * a)) + "i";
//       ans.push(root1, root2);
//     }

//     return ans;
//   }
// }

// let a = 1,
//   b = -2,
//   c = 1;

// let a1 = 752,
//   a2 = 904,
//   c3 = 164;
// let result = new Solution().quadraticRoots(a1, a2, c3);
// console.log("-------->    ", result);

//{ Driver Code Starts
//Initial Template for javascript

// } Driver Code Ends

//User function Template for javascript
/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @returns {number[]} (array)
 */
class Solution {
  quadraticRoots(a, b, c) {
   let  d = (b ** 2 )- (4 * a * c);

    let root1, root2;
    if (d > 0) {
      root1 = Math.floor((-b + Math.sqrt(d)) / (2 * a));
      root2 = Math.floor((-b - Math.sqrt(d)) / (2 * a));
    } else if (d == 0) {
      root1 = Math.floor(-b / (2 * a));
      root2 = root1;
    } else {
      return [-1];
    }

    if (root1 > root2) {
      return [root1, root2];
    } else {
      return [root2, root1];
    }
  }
}

let a = 1,
  b = -2,
  c = 1;

let result1 = new Solution().quadraticRoots(a, b, c);

let a1 = 752,
  a2 = 904,
  c3 = 164;
let result = new Solution().quadraticRoots(a1, a2, c3);
console.log("-------->    ", result);
