/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = prices => {
    let lowestPrice = prices[0]
    let max = 0

    for (let i = 0; i < prices.length; i++) {
        lowestPrice = Math.min(lowestPrice, prices[i])
        max = Math.max(max, prices[i] - lowestPrice)
    }

    return max
}

module.exports = maxProfit
