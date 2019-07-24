/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
const uniquePaths = (m, n) => {
  const memo = new Array(m)
  for (let i = 0; i < memo.length; i++) {
    memo[i] = new Array(n)
  }

  return findPath(m - 1, n - 1, memo)
}

const findPath = (numCol, numRow, memo) => {
  if (numCol === 0 || numRow === 0) {
    memo[numCol][numRow] = 1
    return 1
  } if (memo[numCol][numRow] === undefined) {
    memo[numCol][numRow] = findPath(numCol - 1, numRow, memo) + findPath(numCol, numRow - 1, memo)
  }

  return memo[numCol][numRow]
}

module.exports = uniquePaths
