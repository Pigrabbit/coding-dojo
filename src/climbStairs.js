/**
 * @param {number} n
 * @return {number}
 */
const memo = [0, 1, 2]

const climbStairs = (n) => {
  if (n === 1) {
    return memo[1]
  } if (n === 2) {
    return memo[2]
  } if (!memo[n]) {
    memo[n] = climbStairs(n - 1) + climbStairs(n - 2)
  }
  return memo[n]
}

module.exports = climbStairs
