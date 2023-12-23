function processData(input) {
  //Enter your code here

  for (let i = 0; i < input; i++) {
    if (input % 10 !== 0) {
      input -= 1;
    } else {
      input = Math.floor(input / 10);
    }
   
  }
  //return input;

  //     for (let i = 0; i < k; i++) {
  //     if (n % 10 !== 0) {
  //         n -= 1;
  //     } else {
  //         n = Math.floor(n / 10);
  //     }
  // }
  //return n;
  console.log(input);
}

function numberManipulation(n, k) {
    for (let i = 0; i < k; i++) {
        if (n % 10 !== 0) {
            n -= 1;
        } else {
            n = Math.floor(n / 10);
        }
    }
    return n;
}

// Example usage
const input = "1000000000 9";
const [n, k] = input.split(" ").map(Number);

const result = numberManipulation(n, k);
console.log(result);

processData(1000000000);
