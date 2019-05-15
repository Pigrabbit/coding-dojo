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
    let resultPrefix = ''
    let prefixQueue = []

    strs.forEach((str) => {
        prefixQueue.push(str[0])
    })

    for (let i = 0; i < prefixQueue.length - 1; i ++) {
        if (prefixQueue[i] !== prefixQueue[i + 1]) {
            return resultPrefix
        }
    }

    resultPrefix = prefixQueue.pop()

    return resultPrefix
}

module.exports = longestCommonPrefix
