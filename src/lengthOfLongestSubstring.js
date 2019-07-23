/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = s => {
    let start = 0
    let maxLength = 0
    var map = new Map()

    for (var i = 0; i < s.length; i++) {
        var char = s[i]

        if (charIsAlreadyInStr(map, char, start)) {
            start = map.get(char) + 1
        }

        map.set(char, i);
        maxLength = Math.max(maxLength, i - start + 1)
    }

    return maxLength;
}

const charIsAlreadyInStr = (map, char, start) => {
    if(map.get(char) >= start) {
        return true
    }
}

module.exports = lengthOfLongestSubstring
