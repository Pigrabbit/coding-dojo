const lengthOfLongestSubstring = require('../src/lengthOfLongestSubstring');

describe('lengthOfLongestSubstring', () => {
  describe('Given zero length string', () => {
    const zeroLengthString = '';

    it('returns the longest substring length as 0', () => {
      expect(lengthOfLongestSubstring(zeroLengthString)).toEqual(0);
    });
  });

  describe('Given string only contain space', () => {
    const spaceStr = ' ';

    it('returns 1', () => {
      expect(lengthOfLongestSubstring(spaceStr)).toEqual(1);
    });
  });

  describe('Given a string which composed by single character', () => {
    const singleCharStr = 'bbbbb';

    it('returns 1', () => {
      expect(lengthOfLongestSubstring(singleCharStr)).toEqual(1);
    });
  });

  describe('Given a string which does not have repeated character', () => {
    const noRepeatStr = 'abcde';

    it('returns the length itself', () => {
      expect(lengthOfLongestSubstring(noRepeatStr)).toEqual(noRepeatStr.length);
    });
  });

  describe('Given a string', () => {
    const exampleStr = 'abcabcbb';

    it('returns the length of the longest substring', () => {
      expect(lengthOfLongestSubstring(exampleStr)).toEqual(3);
    });
  });

  describe('Given a another string', () => {
    const exampleStr = 'pwwkew';

    it('returns the length of the longest substring', () => {
      expect(lengthOfLongestSubstring(exampleStr)).toEqual(3);
    });
  });

  describe('Given string which has longest substring start from second element', () => {
    const exampleStr = 'aab';

    it('returns the length of the longest substring', () => {
      expect(lengthOfLongestSubstring(exampleStr)).toEqual(2);
    });
  });
});
