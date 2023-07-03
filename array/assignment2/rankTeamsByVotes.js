/**
 * @param {string[]} votes
 * @return {string}
 */
// var rankTeams = function (votes) {
//   const n = votes.length;
//   let right = 0,
//     left = 0;
//   let visited = new Set();
//   let ans = "";
//   //iterate

//   for (let i = 0; i < n; i++) {
//     if (visited.has(votes[i])) {
//       right++;
//       visited.add(votes[i]);
//     } else {
//       while (visited.has(votes[i])) {
//         visited.delete(votes[left]);
//         left++;
//       }
//       visited.add(votes[i]);
//     }
//   }
//   if (right - left + 1 > ans.length) {
//     for (let j = left; j <= right; j++) {
//       ans += votes[j];
//     }
//   }
//   return ans;
// };
// const votes = ["ABC", "ACB", "ABC", "ACB", "ACB"];
// console.log(rankTeams(votes));

/**
 * @param {string[]} votes
 * @return {string}
 */
var rankTeams = function (votes) {
  if (votes.length == 1) return votes[0];
  let map = {};
  for (let vote of votes) {
    for (let i = 0; i < vote.length; i++) {
      if (!(vote[i] in map)) {
        map[vote[i]] = [];
        for (let j = 0; j < vote.length; j++) {
          map[vote[i]][j] = 0;
        }
      }
      map[vote[i]][i]++;
    }
  }
  let obj = Object.entries(map);
  obj = obj.sort((a, b) => {
    for (let i = 0; i < a[1].length; i++) {
      if (a[1][i] > b[1][i]) return -1;
      else if (a[1][i] < b[1][i]) return 1;
    }
    return a[0].charCodeAt(0) - b[0].charCodeAt(0);
  });
  return obj.map((item) => item[0]).join("");
};
const votes = ["ABC", "ACB", "ABC", "ACB", "ACB"];
console.log(rankTeams(votes));
const votes1 = ["WXYZ", "XYZW"];
console.log(rankTeams(votes1));
