// class Solution {
//   printNos(N) {
//     if (N == 0) return;
//     //code here
//     Solution.prototype.printNos(N - 1);
//     process.stdout.write(N + " ");
//   }
// }

class Solution {
  printNos(N) {
    if (N <= 0) return;
    //code here
    new  Solution().printNos(N - 1);
    process.stdout.write(N + " ");
  }
}

new Solution().printNos(5);
