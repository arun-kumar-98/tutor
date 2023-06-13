var missingRanges = function (nums, lower, uppar) {
  if (nums.length < 0) return;
  const arr = [];
  for (let i = 0; i < nums.length; i++) {
    if (lower < nums[i]) {
      if (nums[i] - lower == 1) {
        arr.push(lower + "");
      } else {
        let temp = nums[i] - 1;
        arr.push(lower + "->" + temp);
      }
    }

    if (nums[i] == Number.MAX_SAFE_INTEGER) {
      return arr;
    }
    lower = nums[i] + 1;
  }
  if (lower < uppar) {
    arr.push(lower + "->" + uppar);
  } else if (lower == uppar) {
    arr.push(lower + "");
  }
  return arr;
};

const nums = [0, 1, 3, 50, 75];
let lower = 0;
let upper = 99;
console.log(missingRanges(nums, lower, upper));
