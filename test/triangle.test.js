const minimalTotal = require('../src/triangle')

describe('minimalTotal', () => {
  describe('with the smallest triangle input', () => {
    const triangle = [
      [1],
      [2, 3],
    ]

    it('returns minimum of sum of the elements', () => {
      expect(minimalTotal(triangle)).toEqual(3)
    })
  })

  describe('with example input', () => {
    const triangle = [
      [2],
      [3, 4],
      [6, 5, 7],
      [4, 1, 8, 3],
    ]

    it('returns 11, which is sum of 2 -> 3 -> 5 -> 1', () => {
      expect(minimalTotal(triangle)).toEqual(11)
    })
  })

  describe('with extreme example input', () => {
    const triangle = [
      [2],
      [3, 4],
      [60, 70, 10],
      [1, 100, 80, 3],
    ]

    it('returns 19, which is sum of 2 -> 4 -> 10 -> 3', () => {
      expect(minimalTotal(triangle)).toEqual(19)
    })
  })
})
