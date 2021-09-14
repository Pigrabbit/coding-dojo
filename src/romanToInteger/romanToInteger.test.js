const romanToInteger = require('./romanToInteger')

describe('romanToInteger', () => {
  describe('with input I', () => {
    const romanNum = 'I'

    it('returns 1', () => {
      expect(romanToInteger(romanNum)).toEqual(1)
    })
  })

  describe('with input III', () => {
    const romanNum = 'III'

    it('returns 3', () => {
      expect(romanToInteger(romanNum)).toEqual(3)
    })
  })

  describe('with input IV', () => {
    const romanNum = 'IV'

    it('returns 4', () => {
      expect(romanToInteger(romanNum)).toEqual(4)
    })
  })

  describe('with input V', () => {
    const romanNum = 'V'

    it('returns 5', () => {
      expect(romanToInteger(romanNum)).toEqual(5)
    })
  })

  describe('with input IX', () => {
    const romanNum = 'IX'

    it('returns 9', () => {
      expect(romanToInteger(romanNum)).toEqual(9)
    })
  })

  describe('with input X', () => {
    const romanNum = 'X'

    it('returns 10', () => {
      expect(romanToInteger(romanNum)).toEqual(10)
    })
  })

  describe('with Input: "LVIII"', () => {
    const romanNum = 'LVIII'

    it('returns Output: 58', () => {
      expect(romanToInteger(romanNum)).toEqual(58)
    })
  })

  describe('with Input: MCMXCIV', () => {
    const romanNum = 'MCMXCIV'

    it('returns Output: 1994', () => {
      expect(romanToInteger(romanNum)).toEqual(1994)
    })
  })
})
