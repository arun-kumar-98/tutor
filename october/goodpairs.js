/**
 * @param {number[]} nums
 * @return {number}
 */
// var numIdenticalPairs = function (nums) {
//   // let count = 0
// let n = nums.length

// for (let i = 0; i < n - 1; i++) {
//     for (let j = i + 1; j < n; j++) {

//         if (nums[i] == nums[j])
//             count++

//     }
// }
//return count

//   const map = new Map();
//   //store elements in map
//   for (const num of nums) {
//     if (map.has(num)) {
//       map.set(num, map.get(num) + 1);
//     } else map.set(num, 1);
//   }
//   //   console.log(map);
//   //iterate map to get values

//   let result = 0;
//   for (const value of map.values()) {
//     result = result + Math.floor((value * (value - 1)) / 2);
//     // console.log(result);
//   }

//   return result;
// };

var numIdenticalPairs = function (nums) {
  //APPROACH#3 UISNG MAP ITESELF O(N) Both t.c & s.c But clean code

  //   const map = new Map();
  //   let result = 0;

  //   for (const num of nums) {
  //     if (map.has(num)) {
  //       result += map.get(num);
  //       //then update the frequency for element
  //       map.set(num, map.get(num) + 1);
  //     } else {
  //       map.set(num, 1);
  //     }
  //   }
  //   return result;
  const map = {};
  let pairs = 0;

  for (const num of nums) {
    if (map[num]) {
      pairs += map[num];
      map[num] += 1;
    } else map[num] = 1;
  }
  return pairs;
};
console.log(numIdenticalPairs([1, 2, 3, 1, 1, 3]));
