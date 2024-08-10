class Solution {
  /**
   * @param {number[]} nums
   * @return {number}
   */
  longestConsecutive(nums) {
    // take longetTarget=1

    let longetTarget = 1;

    for (let i = 0; i < nums.length; i++) {
      let num = nums[0],
        count = 1;
      console.log("num ", num);

      for (let j = 0; j < nums.length; j++) {
        console.log("nums [j] ", nums[j]);
        if (nums[j] == num + 1) {
          count++;
          num++;
          console.log(num, count);
        }
      }
      longetTarget = Math.max(longetTarget, count);
    }

    return longetTarget;
  }
}

// console.log(new Solution().longestConsecutive([2, 20, 4, 10, 3, 4, 5]));
console.log(new Solution().longestConsecutive([0, 3, 2, 5, 4, 6, 1, 1]));
