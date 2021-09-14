const minPathSum = require('./minPathSum')

describe('minPathSum', () => {
  describe('Given a single element grid', () => {
    const grid = [
      [2],
    ]

    it('returns the element as sum of path', () => {
      expect(minPathSum(grid)).toEqual(2)
    })
  })

  describe('Given a single row grid', () => {
    const grid = [
      [1, 2],
    ]

    it('returns sum of the single path', () => {
      expect(minPathSum(grid)).toEqual(3)
    })
  })

  describe('Given a single column grid', () => {
    const grid = [
      [1],
      [2],
    ]

    it('returns sum of the single path', () => {
      expect(minPathSum(grid)).toEqual(3)
    })
  })

  describe('Given a m x n grid filled with non-negative numbers', () => {
    const grid = [
      [1, 3, 1],
      [1, 5, 1],
      [4, 2, 1],
    ]

    it('find a path which minimize the sum of all numbers along its path.', () => {
      expect(minPathSum(grid)).toEqual(7)
    })
  })
})
