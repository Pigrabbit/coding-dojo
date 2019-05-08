/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

const twoSum = (numbers, target) => {
    for (let i = 0; i < numbers.length; i++) {
        let rightPair = target - numbers[i]
        if (numbers.includes(rightPair) && numbers.indexOf(rightPair) !== i) {
            return [i, numbers.indexOf(rightPair)]
        }
    }
    return 'wrong input numbers or target'
}

module.exports = twoSum
