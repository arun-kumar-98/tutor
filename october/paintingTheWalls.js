/**
 * @param {number[]} cost
 * @param {number[]} time
 * @return {number}
 */

// todo::try with recursion

/**
 *
 * @param {*} cost
 * @param {*} time
 *
 *
 * current solution using dp
 */
var paintWalls = function (cost, time) {
  const n = cost.length;

  const dp = new Array(501).fill(null).map(() => new Array(501).fill(-1));

  return solution(0, n, cost, time, dp);
};

function solution(idx, remaining, cost, time, dp) {
  if (remaining <= 0) return 0;

  if (idx >= cost.length) return Infinity;

  if (dp[idx][remaining] != -1) {
    return dp[idx][remaining];
  }

  //check painted walls by paid painter

  let paint_i =
    cost[idx] + solution(idx + 1, remaining - 1 - time[idx], cost, time, dp);
  //free painter

  no_paint = solution(idx + 1, remaining, cost, time, dp);

  //min

  dp[idx][remaining] = Math.min(paint_i, no_paint);
  return dp[idx][remaining];
}
let cost = [1, 2, 3, 2],
  time = [1, 2, 3, 2];

console.log(paintWalls(cost, time));
