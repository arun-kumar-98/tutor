/**
 * sum of series
 */

function sumOfSeries(N) {
  let sum = 0;
  if (N < 0) return 0;

  for (let i = 1; i <= N; i++) {
    sum += i;
  }
  return sum;
}

console.log(sumOfSeries(5));
