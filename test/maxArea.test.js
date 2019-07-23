const maxArea = require('../src/maxArea');
/*
Example:
Input: [1,8,6,2,5,4,8,3,7]
Output: 49
 */
describe('maxArea', () => {
  describe('with input of two height', () => {
    const heights = [3, 5];
    it('returns area of minimum height', () => {
      expect(maxArea(heights)).toEqual(3);
    });
  });

  describe('with input of three height', () => {
    const heights = [3, 5, 4];
    it('returns area of minimum height', () => {
      expect(maxArea(heights)).toEqual(6);
    });
  });

  describe('with example input', () => {
    const heights = [1, 8, 6, 2, 5, 4, 8, 3, 7];

    it('returns area of 49', () => {
      expect(maxArea(heights)).toEqual(49);
    });
  });

  describe('with wrong answer input', () => {
    const heights = [8, 10, 14, 0, 13, 10, 9, 9, 11, 11];

    it('returns area of 80', () => {
      expect(maxArea(heights)).toEqual(80);
    });
  });
});
