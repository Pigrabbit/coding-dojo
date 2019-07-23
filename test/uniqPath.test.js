const uniquePaths = require('../src/uniquePath');

describe('uniquePaths', () => {
  describe('Given m x n grid', () => {
    it('find unique paths from top left to bottom right', () => {
      expect(uniquePaths(3, 2)).toEqual(3);
    });
  });

  describe('Given m x n grid', () => {
    it('find unique paths from top left to bottom right', () => {
      expect(uniquePaths(7, 3)).toEqual(28);
    });
  });
});
