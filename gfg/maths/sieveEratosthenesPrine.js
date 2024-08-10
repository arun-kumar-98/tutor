function isPrime(n) {
  //create an array of size n+1

  const prime = new Array(n + 1).fill(true);

  //if checking for prime
  // if the index value is true
  // and that index is coming in this range
  // marking it as false

  //Appoach ##1
  //------------
  const primesAre = [];
  //   for (let i = 2; i <= n; i++) {
  //     if (prime[i] === true) {
  //       for (let j = 2 * i; j <= n; j = j + i) {
  //         prime[j] = false;
  //       }
  //     }
  //   }

  //Approach #2
  //----------------

  //   for (let i = 2; i <= Math.sqrt(n); i++) {
  //     if (prime[i] === true) {
  //       for (let j = 2 * i; j <= n; j = j + i) {
  //         prime[j] = false;
  //       }
  //     }
  //   }

  //Appraoch ##3
  //--------------

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (prime[i] === true) {
      for (let j = i * i; j <= n; j += i) {
        prime[j] = false;
      }
    }
  }

  console.log(prime);

  for (let i = 2; i <= n; i++) {
    if (prime[i] === true) {
      primesAre.push(i);
    }
  }
  return primesAre;
}

let ans = isPrime(19);
console.log(ans);
