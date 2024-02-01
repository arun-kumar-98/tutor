// class Solution {
//   modInverse(a, m) {
//     // code here

//     //do %m o f both a

//     for (let i = 1; i <= m; i++) {
//       if (((a % m) * (i % m)) % m === 1) {
//         return i;
//       }
//     }
//     return -1;
//   }
// }

//Time Complexity O(M)

// console.log(new Solution().modInverse(3, 11));
// console.log(new Solution().modInverse(10, 17));

/**
 * 
 * EXTENDED  EUCLIDEAN  THEOREM
 * 
 * Modular multiplicative inverse when M and A are coprime or gcd(A, M)=1:
The idea is to use Extended Euclidean algorithms that take two integers ‘a’ and ‘b’, then find their gcd, and also find ‘x’ and ‘y’ such that 

ax + by = gcd(a, b)

To find the multiplicative inverse of ‘A’ under ‘M’, we put b = M in the above formula. Since we know that A and M are relatively prime, we can put the value of gcd as 1.

Ax + My = 1

If we take modulo M on both sides, we get

Ax + My ? 1 (mod M)

We can remove the second term on left side as ‘My (mod M)’ would always be 0 for an integer y. 

Ax  ? 1 (mod M)

So the ‘x’ that we can find using Extended Euclid Algorithm is the multiplicative inverse of ‘A’
 */

let x, y;
class Solution {
  modInverse(a, m) {
    //get gcd

    let gcd = this.extendedGCD(a, m);

    console.log("*******", gcd);
    if (gcd !== 1) {
      return -1;
    }
    //Calculate the MMI

    let ans = ((x % m) + m) % m;

    return ans;
  }

  extendedGCD(a, b) {
    if (a === 0) {
      x = 0;
      y = 1;
      return b;
    }
    //Call Recursive extendedGCD  to store the result

    let gcd = this.extendedGCD(b % a, a);

    console.log("------gcd------", gcd);

    let x1 = x;
    let y1 = y;

    //now the x,y using recursive call
    x = y1 - Math.floor(b / a) * x1;
    y = x1;

    console.log("x-> ", x, " ->", y);
    return gcd;
  }
}

//log(M) & log(M)
//console.log(new Solution().modInverse(3, 11));
// console.log(new Solution().modInverse(10, 17));
console.log(new Solution().modInverse(2, 1));
