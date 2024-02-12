// class Solution {
//   printNos(N) {
//     if (N == 0) return;
//     //code here
//     Solution.prototype.printNos(N - 1);
//     process.stdout.write(N + " ");
//   }
// }

class Solution {
  constructor() {
    this.counter = 1;
  }
  printNos(N) {
    this.print(N, this.counter);
  }
  print(N, counter) {
    if (counter > N) return;
    process.stdout.write(counter + " ");
    this.print(N, counter + 1);
  }
}

new Solution().printNos(64);
