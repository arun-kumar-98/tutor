//{ Driver Code Starts
//Initial Template for javascript
"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => {
  inputString += inputStdin;
});

process.stdin.on("end", (_) => {
  inputString = inputString
    .trim()
    .split("\n")
    .map((string) => {
      return string.trim();
    });

  main();
});

function readLine() {
  return inputString[currentLine++];
}

function main() {
  let t = parseInt(readLine());
  let i = 0;
  for (; i < t; i++) {
    let input_line = readLine()
      .split(" ")
      .map((x) => parseInt(x));
    let a = input_line[0];
    let b = input_line[1];
    let c = input_line[2];
    let obj = new Solution();
    let roots = obj.quadraticRoots(a, b, c);
    if (roots.length == 1 && roots[0] == -1) {
      console.log("Imaginary");
    } else {
      let s = "";
      for (let i = 0; i < roots.length; i++) {
        s += roots[i];
        s += " ";
      }
      console.log(s);
    }
  }
}

// } Driver Code Ends

//User function Template for javascript
/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @returns {number[]} (array)
 */
class Solution {
  quadraticRoots(a, b, c) {
    // code here
    let d = b ** 2 - 4 * a * c;

    const abs = [];
    let root1, root2;

    if (d > 0) {
      root1 = Math.floor((-b + Math.sqrt(d)) / (2 * a));
      root2 = Math.floor((-b - Math.sqrt(d)) / (2 * a));
    } else if (d === 0) {
      root1 = -b / (2 * a);
      root2 = root1;
    } else {
      return [-1];
    }

    if (root1 > root2) {
      return [root1, root2];
    } else {
      return [root2, root1];
    }
  }
}

let ans = new Solution().quadraticRoots(752, 904, 164);
console.log(ans);
