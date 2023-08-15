/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
//  */
// var canPlaceFlowers = function (flowerbed, n) {
//   for (let i = 0; i < flowerbed.length && n > 0; i++) {
//     if (flowerbed[i] == 0) {
//       let next = (i == flowerbed.length - 1) ? 0 : flowerbed[i + 1];
//       let pre =( i == 0 )? 0 : flowerbed[i - 1];

//       if (next == 0 && pre == 0) {
//         flowerbed[i] = 1;
//         n--;
//       }
//     }
//   }
//   return n == 0;
// };

// console.log(canPlaceFlowers([1, 0, 0, 0, 1], 1));
// console.log(canPlaceFlowers([1, 0, 0, 0, 1], 2));

var canPlaceFlowers = function (flowerbed, n) {
  let next, pre;

  for (let i = 0; i < flowerbed.length; i++) {
    if (n > 0) {
      if (flowerbed[i] == 0) {
        if (i == flowerbed.length - 1) next = 0;
        else next = flowerbed[i + 1];
        if (i == 0) pre = 0;
        else pre = flowerbed[i - 1];
      }

      if (pre == 0 && next == 0) flowerbed[i] = 1;
      n--;
    }
  }
  return n == 0;
};

//console.log(canPlaceFlowers([1, 0, 0, 0, 1], 1));
console.log(canPlaceFlowers([1, 0, 0, 0, 1], 2));
//console.log(canPlaceFlowers([1, 0, 0, 0, 0, 0, 1], 2));
