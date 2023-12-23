/**
 * @param {string} path
 * @return {boolean}
 */
var isPathCrossing = function (path) {
  let x = 0,
    y = 0;

  //unordered set

  const set = new Set();

  let key = x.toString() + "_" + y.toString();
  set.add(key);

  for (const ch of path) {
    if (ch == "E") {
      x++;
    } else if (ch == "W") {
      x--;
    } else if (ch == "N") {
      y++;
    } else {
      y--;
    }
    key = x.toString() + "_" + y.toString();
    console.log(key);
    if (set.has(key)) {
      return true;
    }
    set.add(key);
  }
  return false;
};

console.log(isPathCrossing("NES"));
