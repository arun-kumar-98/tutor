/**
 *
 *
 * @param{Number}
 * @returns {Number}
 *
 *
 *
 * Time Complexity :: O(n^1/2 logn )
 *
 * //Space Complexity::O(n) -> because we have taken the auxiliary space to store prime factors of an prime numbers
 */

//approach#2

var primeFactors = function (n) {
  if (n <= 1) return;

  const factors = [];
  for (let i = 2; i * i <= n; i++) {
    // O(n)
    while (n % i == 0) {
      // O(log(n))

      factors.push(i);
      n = n / i;
    }
  }
  if (n > 1) {
    factors.push(n);
  }
  return factors;
};

console.log(primeFactors(450));

/**
 *
 * more efficient solution
 */

var primeFactors = function (n) {
  if (n <= 1) return;

  //checking the divisibility of 2 & 3
  //store these prime factors in one array and return this array

  const factors = [];

  while (n % 2 == 0) {
    console.log(2);
    factors.push(2);
    n = n / 2;
  }

  //same for 3 also
  while (n % 3 === 0) {
    factors.push(3);
    console.log(3);
    n = n / 3;
  }

  for (let i = 5; i * i <= n; i = i + 6) {
    console.log("--------");
    while (n % i === 0) {
      factors.push(i);
      console.log(i);
      n = n / i;
    }
    while (n % (i + 2) === 0) {
      console.log(i + 2);
      factors.push(i + 2);
      n = n / (i + 2);
    }
  }
  if (n > 3) {
    factors.push(n);
    console.log(n);
  }
  return factors;
};

allFactors = primeFactors(450);
console.log(allFactors);
