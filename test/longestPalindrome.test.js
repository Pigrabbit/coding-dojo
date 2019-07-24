const longestPalindrome = require('../src/longestPalindrome')

describe('longestPalindrome', () => {
  describe('given null string', () => {
    it('returns null string', () => {
      expect(longestPalindrome('')).toEqual('')
    })
  })

  describe('given a string which contains even length palindromic substring', () => {
    const str = 'abbc'

    it('returns the longest substring', () => {
      expect(longestPalindrome(str)).toEqual('bb')
    })
  })

  describe('given a string which contains odd length palindromic substring', () => {
    const str = 'babac'

    it('returns the longest substring', () => {
      expect(longestPalindrome(str)).toEqual('bab')
    })
  })

  describe('given a string composed with single charcater', () => {
    const str = 'bbbbb'

    it('returns the entire string as the longest palindromic substring', () => {
      expect(longestPalindrome(str)).toEqual('bbbbb')
    })
  })
})
