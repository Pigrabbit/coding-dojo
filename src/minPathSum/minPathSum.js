/**
 * @param {number[][]} grid
 * @return {number}
 */
const minPathSum = (grid) => {
  const numRows = grid.length
  const numCols = grid[0].length

  for (let row = 0; row < numRows; row++) {
    for (let column = 0; column < numCols; column++) {
      if (row !== 0 && column !== 0) {
        grid[row][column] += Math.min(grid[row - 1][column], grid[row][column - 1])
      } else if (row !== 0) {
        grid[row][column] += grid[row - 1][column]
      } else if (column !== 0) {
        grid[row][column] += grid[row][column - 1]
      }
    }
  }

  return grid[numRows - 1][numCols - 1]
}

module.exports = minPathSum
