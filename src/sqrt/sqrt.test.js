const mySqrt = require('./sqrt')

describe('sqrt', () => {
  describe('with zero', () => {
    it('returns zero', () => {
      expect(mySqrt(0)).toEqual(0)
    })
  })

  describe('with square number', () => {
    it('returns the square root of the input', () => {
      expect(mySqrt(1)).toEqual(1)
    })
  })

  describe('with square number', () => {
    it('returns the square root of the input', () => {
      expect(mySqrt(4)).toEqual(2)
    })
  })

  describe('with non square number', () => {
    it('returns the square root of the input', () => {
      expect(mySqrt(2)).toEqual(1)
    })
  })
})
