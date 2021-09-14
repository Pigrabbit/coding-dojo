const maxProfit = require('./maxProfit')

describe('maxProfit', () => {
  describe('Given an array for which the ith element is the price of a given stock on day i', () => {
    const prices = [7, 1, 5, 3, 6, 4]

    it('finds the maximum profit', () => {
      expect(maxProfit(prices)).toEqual(5)
    })
  })

  describe('Given an array with descending prices', () => {
    const prices = [7, 6, 4, 3, 1]

    it('return 0', () => {
      expect(maxProfit(prices)).toEqual(0)
    })
  })
})
