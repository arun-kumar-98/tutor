/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  //check length

  if (s.length == 0) return false;

  //create hashmap to count no. of characters
  let map = {};

  //iterate over s string and store all character counts

  for (let i = 0; i < s.length; i++) {
    //create variable and store current i value

    let letter = s[i];
    //if letter not exist inside map hash table
    //then count =1 else increment count
    if (!map[letter]) {
      map[letter] = 1;
    } else {
      map[letter]++;
    }
  }

  //for t

  for (let i = 0; i < t.length; i++) {
    let letter = t[i];
    if (map[letter] === undefined) return false;

    //for emplty object
    if (map[letter] < 1) return false;
    map[letter]--;
  }
  return true;
};

const resp = isAnagram("anagram", "nagaram");
//console.log(resp);

//const result = isAnagram("rat", "cat");
//console.log(result);

//T.C  O(N)
//S.C O(n)

//================================================//

var isAnagram1 = function (s, t) {
  if (s.length == 0) return false;

  const sCount = {};
  const tCount = {};

  const N = s.length;
  for (let i = 0; i < N; i++) {
    if (!sCount[s[i]]) sCount[s[i]] = 0;
    if (!tCount[t[i]]) tCount[t[i]] = 0;
    sCount[s[i]]++;
    tCount[t[i]]++;
  }
  for (let ch in sCount) {
    if (sCount[ch] !== tCount[ch]) return false;
  }
  return true;
};

const resp1 = isAnagram("anagram", "nagaram");
//console.log(resp1);

const resp2 = isAnagram("rat", "cat");
//console.log(resp2);

//T.C O(N)
//S.C O(1)

//=======================================================

var isAnagram2 = function (s, t) {
  if (s.length == 0) return false;
  let count = {};
  for (let i = 0; i < s.length; i++) {
    if (!count[s[i]]) count[s[i]] = 0;
    if (!count[t[i]]) count[t[i]] = 0;
    count[s[i]]++;
    count[t[i]]--;
  }
  console.log(count);
  for (let ch in count) {
    if (count[ch] != 0) return false;
  }
  return true;
};

const res = isAnagram2("a", "ab");
console.log(res);
