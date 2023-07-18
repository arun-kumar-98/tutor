/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  const result = [];
  if (intervals.length == 0) return result;

  //sort intervals

  intervals.sort((a, b) => a[0] - b[0]);
  //console.log(intervals);

  let current = intervals[0];

  for (let i = 1; i < intervals.length; i++) {
    if (current[1] < intervals[i][0]) {
      result.push(current);
      current = intervals[i];
    } else {
      current[1] = Math.max(current[1], intervals[i][1]);
    }
  }
  result.push(current);
  return result;
};
console.log(
  merge([
    [1, 3],
    [2, 6],
    [8, 10],
    [15, 18],
  ])
);

console.log(
  merge([
    [1, 4],
    [4, 5],
  ])
);

console.log(
  merge([
    [1, 3],
    [2, 6],
    [8, 9],
    [9, 11],
    [8, 10],
    [2, 4],
    [15, 18],
    [16, 17],
  ])
);
