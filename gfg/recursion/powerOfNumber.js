// class Solution {
//   power(N, R) {
//     const MOD = (10 ^ 9) + 7;
//     if (R == 0) return 1;

//     // let N1 = N % MOD;
//     // let R1 = R % MOD;

//     return (((N % MOD) * this.power(N, R - 1)) % MOD) % MOD;
//   }
// }
// 3296675

//------------------Binary Exponentiation (Optimized Approach):--------------

// class Solution {
//   power(N, R) {
//     //Base Case
//     const MOD = 1e9 + 7;
//     if (R === 0) return 1;

//     if (R % 2 == 0) {
//       let temp = this.power(N, R / 2) % MOD;
//       return (temp * temp) % MOD;
//     } else {
//       let temp = this.power(N, R - 1 / 2) % MOD;
//       console.log(":---------------");
//       return (N * temp * temp) % MOD;
//     }
//   }
// }

// console.log(new Solution().power(13, 31));

//  console.log(new Solution().power(3296675, 5766923));

/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
  if (n === 0) return 1;

  if (n < 0) {
    x = 1 / x;
    n = -n;
  }
  if (n % 2 === 0) {
    return myPow(x * x, n / 2);
  } else {
    return myPow(x * x, (n - 1) / 2) * x;
  }
};

// console.log(myPow(2, 2));

// const MOD = 1e9 + 7;
class Solution {
  power(N, R) {
    return this.myPower(N, R) % MOD;
  }

  myPower(N, R) {
    // base cases
    if (N === 0) return 0;
    if (R === 0) return 1; // power 0 is 1

    let ans;

    if (R % 2 === 0) {
      ans = this.myPower(N, R / 2);
      return (ans * ans) % MOD;
    } else {
      // mod of N
      // N = N % MOD;
      ans = this.myPower(N, R - 1) % MOD;
      console.log("here ", ans);
      return (ans * N + MOD) % MOD;
    }
  }
}
// // console.log(new Solution().power(13, 31));

class Solution {
  
  power(N, R)
  {
      //time limit exceeded
      
      const MOD=1e9+7;
      // code here
      
      //Linear approach
      
      // let puw=1;
      
      // for(let i=0;i<R;i++){
      //   puw=(puw*N)%MOD
      // }
      // return puw%MOD
      
      if(R==0)return 1
      
      
      
      return N*this.power(N,R-1)%MOD
  }
}
console.log(new Solution().power(13, 31));
