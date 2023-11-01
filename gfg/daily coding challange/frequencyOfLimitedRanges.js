// class Solution {
//   frequencyCount(arr, N, P) {
//     const ans = [];

//     //for numbe r 1->P
//     for (let i = 1; i <= P; i++) {
//       let count = 0;

//       for (let j = 0; j < N; j++) {
//         if (arr[j] === i) {
//           count++;
//         }
//       }
//       ans.push(count);
//     }
//     return ans;
//   }
// }

class Solution {
  frequencyCount(arr, N, P) {
    for (let i = 0; i < N; i++) {
      arr[i]--;

      let j = arr[i] % P;

      if (j < P) {
        arr[j] += P;
      }
    }

    for (let i = 0; i < N; i++) {
      arr[i] = Math.floor(arr[i] / P);
    }
    return arr;
  }
}

// Test the function
let arr = [2, 3, 3, 2, 5];
//console.log(new Solution().frequencyCount(arr, 5, 5));

// Display updated array containing frequencies

console.log(new Solution().frequencyCount([8, 9], 2, 9));
