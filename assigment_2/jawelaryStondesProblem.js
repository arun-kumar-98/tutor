/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function (jewels, stones) {
  let count = 0;
  for (let i = 0; i < stones.length; i++) {
    for (let j = 0; j < jewels.length; j++) {
      //   if (stones[i] === jewels[j]) {
      //     count++;
      //   }
      if (stones.charAt(i) === jewels.charAt(j)) {
        count++;
      }
    }
  }
  return count;
};

jewels = "aA";
stones = "aAAbbbb";
// jewels = "z";
// stones = "ZZ";
const resp = numJewelsInStones(jewels, stones);
console.log(resp);
