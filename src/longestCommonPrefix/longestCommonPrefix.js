/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = (strs) => {
  const std = strs[0]
  let lcp = ''

  for (let i = 0; i < std.length; i++) {
    for (let j = 1; j < strs.length; j++) {
      if (strs[j][i] !== std[i]) {
        return lcp
      }
    }
    lcp += std[i]
  }
  return lcp
}

module.exports = longestCommonPrefix
