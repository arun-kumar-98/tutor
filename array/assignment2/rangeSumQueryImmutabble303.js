/**
 * @param {number[]} nums
 * @param {number} left
 * @param {number} right
 * @return {number}
 */

var NumArray = function (nums) {
  this.prefixSum = new Array(nums.length + 1).fill(0);

  for (let i = 0; i < nums.length; i++) {
    this.prefixSum[i + 1] = this.prefixSum[i] + nums[i];
  }
};

NumArray.prototype.sumRange = function (left, right) {
  return this.prefixSum[right + 1] - this.prefixSum[left];
};

/**
 * Your NumArray object will be instantiated and called as such:
 * */
const nums = [([[-2, 0, 3, -5, 2, -1]], [0, 2], [2, 5], [0, 5])];
var obj = new NumArray(nums);
//console.log(obj);
var param_1 = obj.sumRange(left, right);

console.log("___________________ ", param_1);
