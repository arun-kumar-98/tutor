/**
 * @param {number[]} pref
 * @return {number[]}
 */

/**
 *
 * @param {*} pref
 * @returns
 *
 *
 *
 * TIME COMPLEXITY:: O(N)
 * SPACE COMPLEXITY:: O(N)
 */
// var findArray = function (pref) {
//   const ans = [];
//   const n = pref.length;
//   ans[0] = pref[0];

//   for (let i = 1; i < n; i++) {
//     ans.push(pref[i] ^ pref[i - 1]);
//   }
//   return ans;
// };

/**
 *
 *
 * FOLLOWE UP QUESTION
 *
 *
 * TIME COMPLEXITY::O(N)
 * SPACE COMPLEXITY::O(1)
 *
 *
 */

var findArray = function (pref) {
  const n = pref.length;

  for (let i = n - 1; i >= 0; i--) {
    pref[i] = pref[i] ^ pref[i - 1];
  }
  return pref;
};
const pref = [5, 2, 0, 3, 1];

console.log(findArray(pref));
