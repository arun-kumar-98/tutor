/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
//   candidates.sort((a, b) => a - b);
  const list = [];
  const ds = [];
  solve(0, candidates, target, ds, list);
  return list;
};

function solve(index, candidates, target, ds, list) {
  //Base Cae

  if (target === 0) {
    list.push([...ds]);
    return;
  }
  if (index === candidates.length || target < 0) return;

  if (candidates[index] <= target) {
    ds.push(candidates[index]);
    //Take
    solve(index, candidates, target - candidates[index], ds, list);
    //every time we need to remove top elements
    ds.pop();
  }
  //Non take
  solve(index + 1, candidates, target, ds, list);
}

console.log(combinationSum([2, 3, 6, 7], 7));
