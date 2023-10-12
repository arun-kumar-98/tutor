/**
 * @param {number[][]} flowers
 * @param {number[]} people
 * @return {number[]}
 */
// var fullBloomFlowers = function (flowers, people) {
//   const m = people.length;
//   const n = flowers.length;

//   //create array

//   const result = new Array(m).fill(0);

//   for (let i = 0; i < m; i++) {
//     let count = 0;

//     for (let j = 0; j < n; j++) {
//       let start = flowers[j][0];
//       let end = flowers[j][1];

//       if (people[i] >= start && people[i] <= end) {
//         count++;
//       }
//     }
//     result[i] = count;
//   }

//   return result;
// };

///approach #2 using binary search algorithm

var fullBloomFlowers = function (flowers, people) {
  const m = people.length;
  const n = flowers.length;
  const result = new Array(m).fill(0);

  const start_time = new Array(m).fill(0);
  const end_time = new Array(m).fill(0);
  for (let i = 0; i < n; i++) {
    start_time[i] = flowers[i][0];
    end_time[i] = flowers[i][1];
  }

  //sort both arrays

  start_time.sort((a, b) => a - b);
  console.log(start_time);
  end_time.sort((a, b) => a - b);
  console.log(end_time);

  for (let i = 0; i < m; i++) {
    let bloomed_already = binarySearchUpperBound(start_time, people[i]);
    console.log(bloomed_already);
    let died_already = binarySearchLowerBound(end_time, people[i]);
    console.log(died_already);
    result[i] = bloomed_already - died_already;
  }
  return result;
};

function binarySearchUpperBound(arr, target) {
  let low = 0;
  let right = arr.length - 1;

  let result = -1;
  while (low <= right) {
    let mid = Math.floor((low + right) / 2);

    if (arr[mid] > target) {
      result = mid;
      right = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return result == -1 ? arr.length : result;
}

function binarySearchLowerBound(arr, target) {
  let low = 0;
  let right = arr.length - 1;

  let result = -1;
  while (low <= right) {
    let mid = Math.floor((low + right) / 2);

    if (arr[mid] < target) {
      low = mid + 1;
    } else {
      result = mid;
      right = mid - 1;
    }
  }
  return result == -1 ? arr.length : result;
}

console.log(
  fullBloomFlowers(
    [
      [21, 34],
      [17, 37],
      [23, 43],
      [17, 46],
      [37, 41],
      [44, 45],
      [32, 45],
    ],
    [31, 41, 10, 12]
  )
);
