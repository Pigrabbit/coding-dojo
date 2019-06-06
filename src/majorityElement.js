/**
 * @param {number[]} nums
 * @return {number}
 */
const majorityElement = nums => {
    let countingNumbers = new Map()

    nums.forEach(number => {
        if (!countingNumbers.get(number)) {
            countingNumbers.set(number, 1)
        } else {
            let i = countingNumbers.get(number)
            countingNumbers.set(number, i + 1)
        }
    })

    let maxCount = Math.max(...countingNumbers.values())
    let majorityElement = -1

    for (const k of countingNumbers.keys()) {
        if (countingNumbers.get(k) === maxCount) {
            majorityElement = k
        }

    }

    return majorityElement
}

module.exports = majorityElement
