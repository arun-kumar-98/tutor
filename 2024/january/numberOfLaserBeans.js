/**
 * @param {string[]} bank
 * @return {number}
 */
var numberOfBeams = function (bank) {
  const n = bank.length;
  let prevDeviceCount = 0;

  let result = 0;

  for (let i = 0; i < n; i++) {
    let currDeviceCount = 0;

    for (let ch of bank[i]) {
      if (ch === "1") {
        currDeviceCount++;
      }
    }
    result += currDeviceCount * prevDeviceCount;
    if (currDeviceCount !== 0) {
      prevDeviceCount = currDeviceCount;
    }
  }
  return result;
};

const bank = ["011001", "000000", "010100", "001000"];
console.log(numberOfBeams(bank));
