/**
 * @param {string} s
 * @return {string}
 */
const longestPalindrome = (s) => {
  let longest = ''

  for (let i = 0; i < s.length; i++) {
    for (let j = 0; j <= 1; j++) {
      let left = i
      let right = i + j

      while (isPalindromic(left, right, s)) {
        left--
        right++
      }

      if (isTheLongest(left, right, longest)) {
        longest = s.substring(left + 1, right)
      }
    }
  }

  return longest
}

const isPalindromic = (left, right, s) => s[left] && s[right]
      && s[left] === s[right]

const isTheLongest = (left, right, longest) => (right - left - 1) > longest.length


module.exports = longestPalindrome
