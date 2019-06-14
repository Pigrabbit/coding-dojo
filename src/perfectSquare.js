/**
 * @param {number} n
 * @return {number}
 */
const numSquares = n => {
    const nums = [0]

    for (let leastSquareNum = 1; leastSquareNum <= n; leastSquareNum++) {
        nums[leastSquareNum] = nums[leastSquareNum - 1] + 1
        for (let root = 1; root * root <= leastSquareNum; root++) {
            nums[leastSquareNum] = Math.min(nums[leastSquareNum], nums[leastSquareNum - root * root] + 1)
        }
    }

    return nums[n]
}

module.exports = numSquares
