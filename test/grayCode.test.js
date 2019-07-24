const grayCode = require('../src/grayCode')

describe('grayCode', () => {
  describe('with input of zero', () => {
    it('the gray code sequence to begin with 0', () => {
      expect(grayCode(0)).toEqual([0])
    })
  })

  describe('given a non-negative integer n representing total number of bits in the code', () => {
    it('print the sequence of gray code', () => {
      expect(grayCode(2)).toEqual([0, 1, 3, 2])
    })
  })

  describe('given a non-negative integer n representing total number of bits in the code', () => {
    it('print the sequence of gray code', () => {
      expect(grayCode(3)).toEqual([0, 1, 3, 2, 6, 7, 5, 4])
    })
  })
})
