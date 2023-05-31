//NAIVE APPROACH
function twoSum(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] == target) {
        return [i, j];
      }
    }
  }
  return [];
}

const arr1 = [2, 3, 4, 8, 7];
const target = 9;
//const resp = twoSum(arr, target);
//console.log(resp);

//optimal solution

//using hashmap

var twoSum = function (nums, target) {
  //hashmap
  const result = [];

  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if (map[target - n] !== undefined) {
      result.push(map[target - n], i);
      return result;
    }
    map[n] = i;
  }
  return result;
};
console.log(twoSum(arr1, target));

//T.C : O(N)
// S.C O(N) //because of auxilary space

//  approach #3

var twoSum = function (nums, target) {
  const hashmap = new Map();

  for (let i = 0; i < nums.length; i++) {
    let diff = target - nums[i];
    if (hashmap.has(diff)) {
      return [i, hashmap.get(diff)];
    }

    hashmap.set(nums[i], i);
  }
};
console.log(twoSum(arr1, target));

var twoSum = function (nums, target) {
  const hashmap = new Map();

  for (let i = 0; i < nums.length; i++) {
    let diff = target - nums[i];
    if (diff in hashmap) return [i, hashmap[diff]];

    hashmap[nums[i]] = i;
  }
};

console.log(twoSum(arr1, target));
