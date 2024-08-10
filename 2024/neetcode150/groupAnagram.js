class Solution {
  /**
   * @param {string[]} strs
   * @return {string[][]}
   */
  groupAnagrams(strs) {
    const map = {};

    for (let i = 0; i < strs.length; i++) {
      let sortstr = strs[i].split("").sort().join("");

      if (!map[sortstr]) {
        map[sortstr] = [];
      }
      map[sortstr].push(strs[i]);
    }

    return Object.values(map);
  }
}

let strs = ["act", "pots", "tops", "cat", "stop", "hat"];
s = new Solution().groupAnagrams(strs);

console.log(s);
