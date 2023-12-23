// function processData(input) {
//   const [n, k] = input.split(" ").map(Number);

//   let prefixSumEven = new Array(n + 1).fill(0);
//   let prefixSumOdd = new Array(n + 1).fill(0);

//   for (let i = 0; i < n; i++) {
//     prefixSumEven[i + 1] = prefixSumEven[i] + (i % 2 === 0 ? k[i] : 0);
//     prefixSumOdd[i + 1] = prefixSumOdd[i] + (i % 2 != 0 ? k[i] : 0);
//   }

//   // Check for subarray with equal even and odd indices sum
//   for (let i = 0; i < n; i++) {
//     for (let j = i; j <= n; j++) {
//       let even = prefixSumEven[j] - prefixSumEven[i];
//       let odd = prefixSumOdd[j] - prefixSumOdd[i];

//       if (even === odd) {
//         console.log([i, j - 1]);
//         return [i, j - 1];
//       }
//     }
//   }

//   console.log([-1,-1])
//   return [-1, -1];
// }

function findSubarrayWithPattern(n, arr) {
  // Calculate prefix sums for both even and odd indices
  let prefixSumEven = Array(n + 1).fill(0);
  let prefixSumOdd = Array(n + 1).fill(0);

  for (let i = 0; i < n; i++) {
    prefixSumEven[i + 1] = prefixSumEven[i] + (i % 2 === 0 ? arr[i] : 0);
    prefixSumOdd[i + 1] = prefixSumOdd[i] + (i % 2 !== 0 ? arr[i] : 0);
  }

  // Check for subarray with equal even and odd indices sum
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j <= n; j++) {
      const sumEven = prefixSumEven[j] - prefixSumEven[i];
      const sumOdd = prefixSumOdd[j] - prefixSumOdd[i];

      if (sumEven === sumOdd) {
        console.log(i, j - 1);
        
        return [i, j - 1];
      }
    }
  }
 // console.log(-1, -1);

   return [-1, -1];
}

// Sample Input
const n = 7;
const arr = [1, 2, 3, 2, 5, 6, 7];

// Sample Output
findSubarrayWithPattern(n, arr);
//console.log(result.join(" "));
