/**
 * @param {number} n
 * @return {number}
 */
let memo = [0, 1, 2]

const climbStairs = n => {
    if (n === 1) {
        return memo[1]
    } else if (n === 2) {
        return memo[2]
    } else if (!memo[n]) {
        memo[n] = climbStairs(n - 1) + climbStairs(n - 2)
    }
    return memo[n]
}

module.exports = climbStairs
