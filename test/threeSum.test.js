/* Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0?
*  Find all unique triplets in the array which gives the sum of zero.
* Note:
* The solution set must not contain duplicate triplets.
* Example:
* Given array nums = [-1, 0, 1, 2, -1, -4],
*    A solution set is:
*    [
*        [-1, 0, 1],
*        [-1, -1, 2]
*    ]
*/

const threeSum = require('../src/threeSum');

describe('threeSum', () => {
  describe('with input which contains zero', () => {
    const nums = [-2, -1, 0, 1, 2];

    it('returns sets which includes zero and numbers that have identical abs values as well', () => {
      expect(threeSum(nums)).toEqual([[-2, 0, 2], [-1, 0, 1]]);
    });
  });

  describe('with input which contains two negatives and one positive set', () => {
    const nums = [-2, -1, 0, 3];

    it('returns sets which includes two negatives and one positive', () => {
      expect(threeSum(nums)).toEqual([[-2, -1, 3]]);
    });
  });

  describe('with input which contains two positives and one negative set', () => {
    const nums = [-2, 0, 1, 1];

    it('returns sets which includes two positives and one negative', () => {
      expect(threeSum(nums)).toEqual([[1, 1, -2]]);
    });
  });
});
