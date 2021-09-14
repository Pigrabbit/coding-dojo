const coinChange = require('./coinChange')

describe('coinChange', () => {
  describe('if amount of money cannot be made up by any combination of the coins', () => {
    it('returns -1', () => {
      const coins = [2]
      const amount = 3

      expect(coinChange(coins, amount)).toEqual(-1)
    })
  })

  describe('single type of coin is available and able to make up money amount', () => {
    it('returns amount divided by type of coin', () => {
      const coins = [1]
      const amount = 7

      expect(coinChange(coins, amount)).toEqual(7)
    })
  })

  describe('give two types of coin to make up money amount', () => {
    it('returns minimum number of coin needed', () => {
      const coins = [1, 2]
      const amount = 5

      expect(coinChange(coins, amount)).toEqual(3)
    })
  })
  describe('given coins of different denominations and a total amount of money amount', () => {
    it('returns the fewest number of coins that make up that amount.', () => {
      const coins = [1, 2, 5]
      const amount = 11

      expect(coinChange(coins, amount)).toEqual(3)
    })
  })
})
