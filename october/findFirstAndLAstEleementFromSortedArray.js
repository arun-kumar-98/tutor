/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  const first = findFirst(nums, target);
  const last = findLast(nums, target);
  return [first, last];
};

function findFirst(nums, target) {
  let left = 0,
    right = nums.length - 1,
    first = -1;

  while (left <= right) {
    //calculate mid

    let mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) {
      first = mid;
      right = mid - 1;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return first;
}

function findLast(nums, target) {
  let left = 0,
    right = nums.length - 1,
    last = -1;

  while (left <= right) {
    //calculate mid

    let mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) {
      last = mid;
      left = mid + 1;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return last;
}

let nums = [5, 7, 7, 8, 8, 10],
  target = 8;
console.log(searchRange(nums, target));

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

//case [2,2] target 2
//case [1] target 1

var searchRange = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;

  let begin = -1;
  let end = -1;

  //find the first occurance
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) {
      if (mid === 0 || nums[mid - 1] !== nums[mid]) {
        begin = mid;
        break;
      }
    }

    if (nums[mid] >= target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  //find the last occurance
  left = 0;
  right = nums.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) {
      if (mid === nums.length - 1 || nums[mid + 1] !== nums[mid]) {
        end = mid;
        break;
      }
    }

    if (nums[mid] <= target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return [begin, end];
};
