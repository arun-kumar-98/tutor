// class Solution {
//   // Function to check if given number n is a power of two.
//   isPowerofTwo(n) {
//     let ans = "NO";

//     if (n <= 0) {
//       return ans;
//     }

//     while (n > 1) {
//       if (n % 2 !== 0) {
//         return ans;
//       }
//       n /= 2;
//     }
//     ans = "YES";
//     return ans;
//   }
// }

// class Solution {
//   // Function to check if given number n is a power of two.
//   isPowerofTwo(n) {
//     if (n <= 0) return "NO";

//     while (n % 2 === 0) {
//       n = n / 2;
//     }

//     if (n === 1) {
//       return "YES";
//     }
//     return "NO";
//   }
// }
//console.log(new Solution().isPowerofTwo(3));

// function isPowerofTwo(n) {
//   if (n <= 0) return "NO";
//   if (n == 1) return "YES";
//   if (n % 2 !== 0) {
//     return "NO";
//   }
//   return isPowerofTwo(n / 2);
// }

// console.log(isPowerofTwo(16));

class Solution {
  // Function to check if given number n is a power of two.
  isPowerofTwo(n) {
    if (n <= 0) return false;

    let x = Math.floor(Math.log(n) / Math.log(2));

    if (Math.pow(2, x) === n) {
      return true;
    }
    return false;
  }
}

console.log(new Solution().isPowerofTwo(98));
