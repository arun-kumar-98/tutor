class Solution {
  toh(n, from, to, aux) {
    // code here
    //Base Case
    if (n === 1) {
      console.log(`move disk ${n} from rod 1 to rod ${from}`);

      return 1;
    }
    let count = 0;

    //Call for move N-1 to from to aux
    count = this.toh(n - 1, from, aux, to);
    console.log(`move disk ${n} from rod 1 to rod ${from}`);
    count += this.toh(n - 1, aux, to, from);
    return count;
  }
}

console.log(new Solution().toh(12, 1, 3, 2));
