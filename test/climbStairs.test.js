const climbStairs = require('../src/climbStairs')

describe('climbStairs', () => {
  describe('Given 1 step', () => {
    it('returns single way to climb to the top', () => {
      expect(climbStairs(1)).toEqual(1)
    })
  })

  describe('Given 2 steps', () => {
    it('returns two distinct ways to climb to the top', () => {
      expect(climbStairs(2)).toEqual(2)
    })
  })

  describe('Given n steps, which is greater than 2', () => {
    it('returns distinct ways climb to the top', () => {
      expect(climbStairs(3)).toEqual(3)
    })
  })

  describe('Given n steps, which is greater than 2', () => {
    it('returns distinct ways climb to the top', () => {
      expect(climbStairs(9)).toEqual(55)
    })
  })
})
