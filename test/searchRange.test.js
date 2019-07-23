const searchRange = require('../src/searchRange');

describe('searchRange', () => {
  describe('Given an sorted array in ascending order', () => {
    const nums = [5, 7, 7, 8, 8, 10];
    const target = 8;

    it('finds the starting and end position of target value', () => {
      expect(searchRange(nums, target)).toEqual([3, 4]);
    });
  });

  describe('Given an sorted array which does not have target as element', () => {
    const nums = [5, 7, 7, 8, 8, 10];
    const target = 6;

    it('returns [-1, -1]', () => {
      expect(searchRange(nums, target)).toEqual([-1, -1]);
    });
  });

  describe('When length of 1 array and that target value is given', () => {
    const nums = [1];
    const target = 1;

    it('returns 0 for both starting and end position', () => {
      expect(searchRange(nums, target)).toEqual([0, 0]);
    });
  });

  describe('failure test', () => {
    const nums = [1, 1, 2];
    const target = 1;

    it('returns [0, 1]', () => {
      expect(searchRange(nums, target)).toEqual([0, 1]);
    });
  });
});
