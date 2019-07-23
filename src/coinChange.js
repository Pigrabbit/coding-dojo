/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
const coinChange = (coins, amount) => {
    const numCoins = new Array(amount + 1)
    numCoins.fill(Number.MAX_SAFE_INTEGER)
    numCoins[0] = 0

    for (let amountIter = 1; amountIter <= amount; amountIter++) {
        for (let coinsIter = 0; coinsIter <coins.length; coinsIter++) {
            if (amountIter - coins[coinsIter] >= 0) {
                numCoins[amountIter] = Math.min(numCoins[amountIter - coins[coinsIter]] + 1, numCoins[amountIter])
            }
        }
    }

    return numCoins[amount] === Number.MAX_SAFE_INTEGER ? -1 : numCoins[amount]
}

module.exports = coinChange
