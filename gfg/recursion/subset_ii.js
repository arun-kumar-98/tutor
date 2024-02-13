/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
  //sort the array
  nums.sort((a, b) => a - b);
  //create empty list
  const list = [];
  const ds = [];
  solve(0, nums, ds, list);
  return list;
};
var solve = function (index, nums, ds, list) {
  //add empty ds data structure
  list.push([...ds]);

  //now checking from index to till length in nums

  for (let i = index; i < nums.length; i++) {
    //check for duplication
    if (i != index && nums[i] === nums[i - 1]) continue;

    //else add the first element in data structure
    ds.push(nums[i]);

    //call the recursive function for further checking

    solve(i + 1, nums, ds, list);

    //remove the top element from the data structure
    ds.pop();
  }
};

console.log(subsetsWithDup([1, 2, 3]));
