//Getting TLE
// class Solution {
//   exactly3Divisors(N) {
//     let count = 0;
//     let divisor = 0;

//     for (let i = 2; i <= N; i++) {
//       console.log(i, "----i----", Math.sqrt(i));
//       for (let j = 1; j <= Math.sqrt(i); j++) {
//         if (i % j === 0) {
//           divisor += j * j == i ? 1 : 2;
//         }
//       }
//       if (divisor == 3) {
//         count++;
//       }
//       //reset divisor count
//       divisor = 0;
//     }

//     return count;
//   }
// }

//For Optimized code
// we have to eratothenes algorithm

//here is solution by chatgpt 😭

class Solution {
  sieveOfEratosthenes(N) {
    let isPrime = new Array(N + 1).fill(true);
    isPrime[0] = isPrime[1] = false;

    for (let i = 2; i * i <= N; i++) {
      if (isPrime[i]) {
        for (let j = i * i; j <= N; j += i) {
          isPrime[j] = false;
        }
      }
    }

    return isPrime;
  }

  exactly3Divisors(N) {
    let count = 0;
    let isPrime = this.sieveOfEratosthenes(N);
    console.log(isPrime);

    for (let i = 2; i <= N; i++) {
      let sqrtI = Math.round(Math.sqrt(i));
      console.log("---------sqrtI----------", sqrtI);
      if (isPrime[i] && sqrtI * sqrtI === i) {
        console.log("----------------");
        count++;
      }
    }

    return count;
  }
}

// Example usage:
// console.log(new Solution().exactly3Divisors(6)); // Output: 1
console.log(new Solution().exactly3Divisors(9)); // Output: 2
