/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function (nums) {
  let n = nums.length;
  let cnt = 0,
    element1 = Number.MIN_SAFE_INTEGER;
  let cnt2 = 0,
    element2 = Number.MIN_SAFE_INTEGER;
  const ans = [];

  for (let i = 0; i < n; i++) {
    //if cnt1=0 and ith element !=element2

    if (cnt == 0 && nums[i] !== element2) {
      element1 = nums[i];
      cnt = 1;
    } else if (cnt2 == 0 && nums[i] !== element1) {
      element2 = nums[i];
      cnt2 = 1;
    } else if (nums[i] == element1) {
      cnt++;
    } else if (nums[i] == element2) {
      cnt2++;
    } else {
      cnt--;
      cnt2--;
    }
  }
  let count1 = 0,
    count2 = 0;

  for (let i = 0; i < n; i++) {
    if (nums[i] == element1) {
      count1++;
    }
    if (nums[i] == element2) {
      count2++;
    }
  }
  if (count1 > Math.floor(n / 3)) {
    ans.push(element1);
  }
  if (count2 > Math.floor(n / 3)) {
    ans.push(element2);
  }
  //return ans

  return ans;
};

// console.log(majorityElement([3, 2, 3]));
// console.log(majorityElement([1, 2]));

var majorityElement = function (nums) {
  const cap = nums.length / 3;

  return Array.from(
    nums.reduce(
      (acc, curr) => {
        if (acc.gt.has(curr)) return acc;
        acc[curr] = acc[curr] ? acc[curr] + 1 : 1;
        if (acc[curr] > cap) acc.gt.add(curr);
        return acc;
      },
      { gt: new Set() }
    ).gt
  );
};

// console.log(majorityElement([3, 2, 3]));
