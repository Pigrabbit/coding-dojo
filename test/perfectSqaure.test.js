const numSquares = require('../src/perfectSquare')

describe('numSquares', () => {
  describe('Given a positive integer n', () => {
    it('finds the least number of perfect square numbers', () => {
      expect(numSquares(12)).toEqual(3)
    })
  })

  describe('Given a positive integer n', () => {
    it('finds the least number of perfect square numbers', () => {
      expect(numSquares(13)).toEqual(2)
    })
  })
})
