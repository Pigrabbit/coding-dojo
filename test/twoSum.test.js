const twoSum = require('../src/twoSum');

describe('twoSum', () => {
  describe('given valid numbers and target', () => {
    it('returns pairs consist target', () => {
      expect(twoSum([3, 2, 4], 6)).toEqual([1, 2]);
    });
  });

  describe('given invalid numbers or target', () => {
    it('returns error message', () => {
      expect(twoSum([2, 4, 6], 9)).toEqual('wrong input numbers or target');
    });
  });
});
