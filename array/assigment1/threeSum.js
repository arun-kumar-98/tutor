/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const nums = [-1, 0, 1, 2, -1, -4];
//naive approach
var threeSum = function (nums) {
  const res = [];
  const indexes = [];
  const target_sum = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        if (nums[i] + nums[j] + nums[k] === target_sum) {
          let triplets = [nums[i], nums[j], nums[k]].sort((a, b) => a - b);
          console.log("*** ", triplets);
          if (!isDuplicate(res, triplets)) {
            res.push(triplets);
          }
        }

        // if (
        //   target_sum === nums[i] + nums[j] + nums[k] &&
        //   !indexes.includes(i) &&
        //   !indexes.includes(j) &&
        //   !indexes.includes(k)
        // ) {
        //   res.push(nums[i], nums[j], nums[j]);
        //   indexes.push(i);
        //   indexes.push(j);
        //   indexes.push(k);
        // }
      }
    }
  }
  return res;
};

function isDuplicate(result, triplets) {
  for (let i = 0; i < result.length; i++) {
    if (
      result[i][0] === triplets[0] &&
      result[i][1] === triplets[1] &&
      result[i][2] === triplets[2]
    ) {
      return true;
    }
  }
  return false;
}

console.log(threeSum(nums));

//Time Limit Exceeded

///next approach :: sorting +two pointer   optimized solution
