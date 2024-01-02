/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
// var canPlaceFlowers = function (flowerbed, n) {
//     let i = 0;

//     while (i < flowerbed.length && n !== 0) {
//         if (flowerbed[i] === 0 && flowerbed[i - 1] !== 1 && flowerbed[i + 1] !== 1) {
//             i++;
//             n--
//         }
//         i++
//     }
//     return n == 0;

// };
var canPlaceFlowers = function (flowerbed, n) {
  let canPlaceFlowersCount = 0;
  //check if n==0 then return true

  if (n === 0) {
    return true;
  }

  for (let i = 0; i < flowerbed.length; i++) {
    let leftPlaceFlowerCount = flowerbed[i - 1];
    let rightPlaceFlowerCount = flowerbed[i + 1];
    console.log("-------left", leftPlaceFlowerCount);
    console.log("-------right", rightPlaceFlowerCount);

    // check condition sum of all less than 1
    //increament  canPlaceFlowersCount , i

    if (leftPlaceFlowerCount + rightPlaceFlowerCount + flowerbed[i] < 1) {
      i++;
      canPlaceFlowersCount++;
    }
    console.log("-------------", canPlaceFlowersCount);
  }
  return canPlaceFlowersCount >= n;
};

let flowerbed = [1, 0, 0, 0, 1],
  n = 2;
console.log(canPlaceFlowers([0, 0, 1, 0, 1], 1));
