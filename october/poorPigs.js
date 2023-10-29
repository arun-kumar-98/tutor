/**
 * @param {number} buckets
 * @param {number} minutesToDie
 * @param {number} minutesToTest
 * @return {number}
 */
var poorPigs = function (buckets, minutesToDie, minutesToTest) {
  let T = Math.floor(minutesToTest / minutesToDie + 1);

  let pigs = 0;

  while (Math.pow(T, pigs) < buckets) {
    pigs++;
  }
  return pigs;
};
let buckets = 4,
  minutesToDie = 15,
  minutesToTest = 15;

console.log(poorPigs(buckets, minutesToDie, minutesToTest));

//other people
/**
 * @param {number} buckets
 * @param {number} minutesToDie
 * @param {number} minutesToTest
 * @return {number}
 */

//  if the power of buckets are n^k
//  we only need to check n^k-1 buckets
// the last bucket will be dependent of the previous result
// as we upto n^k-1 bucktets k-1 pigs were able to find the poisoned water

//we are doing trials+1 because each pig at 1 trial time can calculate for 2 buckets
// if the power of trials +1 can't suffice the test we can increase the number of test
// so increase the number of pigs
// so the cross checking of pigs in every dimension takes place
// keep in mind with each increased pigs the dimension gets increased
// so the 4 trials and 25 buckets number of pigs we need is 25
// if the buckets get increased by 1 = 25 +1 =26
// now it cannot suffice from 26 pigs we will increment the pig by 1
// now it cannot suffice upto (trial+1)^3 =which is (4+1)^3 =125
// so upto 125, 3 buckets will do the minimum job
// then again from 126 to 625 pigs 4 pigs will do the job and so on
var poorPigs = function (b, d, t) {
  let trials = t / d;
  let numpigs = 0;

  while ((trials + 1) ** numpigs < b) {
    numpigs++;
  }
  return numpigs;
};
