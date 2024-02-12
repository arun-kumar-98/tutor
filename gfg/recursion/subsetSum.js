class Solution {
  solve(index, sum, arr, N, subset) {
    //Base condition
    if (index === N) {
      subset.push(sum);
      return;
    }

    //Call Recursion here

    this.solve(index + 1, sum + arr[index], arr, N, subset);
    //Don't Take

    this.solve(index + 1, sum, arr, N, subset);
  }

  subsetSums(arr, n) {
    //code here
    const subset = [];
    this.solve(0, 0, arr, n, subset);

    //sort the array
    console.log("subSet", subset);

    subset.sort((a, b) => a - b);
    return subset;
  }
}

console.log(new Solution().subsetSums([2, 3], 2));
console.log(new Solution().subsetSums([5, 2, 1], 3));
