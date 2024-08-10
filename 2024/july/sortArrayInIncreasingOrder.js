/**
 * @param {number[]} nums
 * @return {number[]}
 */
var frequencySort = function (nums) {
  const map = new Map();
  // store all elements with the frequency
  for (let num of nums) {
    let freq = map.get(num) || 0;
    map.set(num, freq + 1);
  }
  let maparr = Array.from(map);
  maparr.sort((a, b) => {
    let freaquecyA = a[1];
    let freaquecyB = b[1];
    if (freaquecyA == freaquecyB) {
      return b[0] - a[0];
    }
    //
    return freaquecyA - freaquecyB;
  });
  let ans = [];
  // filter the record
  maparr.forEach((entry) => {
    let key = entry[0];
    let frequency = entry[1];

    for (let i = 0; i < frequency; i++) {
      ans.push(parseInt(key));
    }
  });

  return ans;
};

const nums = [1, 2, 2, 2, 2, 3];

let res = frequencySort(nums);
console.log("map with freq", res);
