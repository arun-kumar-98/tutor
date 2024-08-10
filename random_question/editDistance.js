/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (word1, word2) {
  let m = word1.length,
    n = word2.length;

  // create 2d array

  const dp = Array.from(Array(m + 1), () => Array(n + 1));
  console.log(dp);

  // initialiaze dp for row

  for (let i = 0; i <= m; i++) {
    dp[i][0] = i;
  }

  console.log("row inserted dp", dp);
  // initialiaze dp for column

  for (let j = 0; j <= n; j++) {
    dp[0][j] = j;
  }
  console.log("column inserted dp", dp);

  // fill array

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      //check if first char of word1 and first char word2 are same
      // then store in array

      if (word1[i - 1] == word2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        // then delete ,insert and replace the character in array

        dp[i][j] =
          1 +
          Math.min(
            dp[i - 1][j], //delete char
            dp[i][j - 1], // repace the char
            dp[i - 1][j - 1]
          );
      }

      console.log("(( dp[i][j] ** ))", dp[i][j]);
    }
  }
  return dp[m][n];
};

// call the function

let word1 = "horse",
  word2 = "ros";

let result = minDistance(word1, word2);

console.log("final result  after distance edited ", result);
