class Solution {
  // Function to find the maximum index difference.
  maxIndexDiff(A, N) {
    const rightMax = new Array(N).fill(0);
    rightMax[N - 1] = A[N - 1];

    console.log(rightMax);

    //storing max elements

    for (let i = N - 2; i >= 0; i--) {
      rightMax[i] = Math.max(rightMax[i + 1], A[i]);
    }

    console.log("**** ", rightMax);
    let maxDist = -1;
    console.log(maxDist);

    let i = 0,
      j = 0;

    while (i < N && j < N) {
      if (rightMax[j] >= A[i]) {
        maxDist = Math.max(maxDist, j - i);
        j++;
      } else {
        i++;
      }
    }
    return maxDist;
  }
}

let n = 9;
const a = [34, 8, 10, 3, 2, 80, 30, 33, 1];

let ans = new Solution().maxIndexDiff(a, n);
console.log(ans);
