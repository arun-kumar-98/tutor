/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  candidates.sort((a, b) => a - b);
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
  //checking for equal elements

  for (let i = index; i < candidates.length; i++) {
    if (i > index && candidates[i] === candidates[i - 1]) continue;
    //check if target > arr[i]
    //then simply break the break

    if (candidates[i] > target) break;

    //add
    ds.push(candidates[i]);
    //Call recursion

    solve(i + 1, candidates, target - candidates[i], ds, list);
    //
    ds.pop();
  }
}
const candidates = [10, 1, 2, 7, 6, 1, 5];
let target = 8;
console.log(combinationSum(candidates, target));
