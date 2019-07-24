// Write a function to find the longest common prefix string amongst an array of strings.
//     If there is no common prefix, return an empty string "".
//     Example 1:
// Input: ["flower","flow","flight"]
// Output: "fl"\
//
// Example 2:
// Input: ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.
//     Note:
// All given inputs are in lowercase letters a-z.

/**
 * @param {string[]} strs
 * @return {string}
 */

const longestCommonPrefix = (strs) => {
  const shortestLength = shortestWordLength(strs)
  if (shortestLength === 0) {
    return ''
  }

  let resultPrefix = ''
  const strArrays = []
  strs.forEach((str) => {
    strArrays.push(str.split(''))
  })

  for (let i = 0; i < shortestLength; i++) {
    if (!hasCommon((strArrays))) {
      break
    }
    resultPrefix += strArrays[0][0]

    strArrays.forEach((strArray) => {
      strArray.shift()
    })
  }

  return resultPrefix
}

const shortestWordLength = (strs) => {
  const lengths = []
  strs.forEach((strs) => {
    lengths.push(strs.length)
  })

  return lengths.sort()[0]
}

const hasCommon = (strArrays) => {
  const prefixArray = []
  const numberOfStr = strArrays.length

  strArrays.forEach((strArray) => {
    prefixArray.push(strArray[0])
  })

  for (let i = 0; i < numberOfStr - 1; i++) {
    if (prefixArray[i] !== prefixArray[i + 1]) {
      return false
    }
  }

  return true
}

module.exports = longestCommonPrefix
