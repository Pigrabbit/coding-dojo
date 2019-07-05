/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
const removeElement = (nums, val) => {
    let returnLength = nums.length

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === val) {
            returnLength--
            nums.splice(i, 1)
            i--
        }
    }

    return returnLength
}

module.exports = removeElement
