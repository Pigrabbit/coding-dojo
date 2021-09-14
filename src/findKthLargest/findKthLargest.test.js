const findKthLargest = require('./findKthLargest')

describe('findKthLargest', () => {
  describe('with non duplicate element', () => {
    const inputArray = [3, 2, 1, 5, 6, 4]
    it('returns k-th largest element', () => {
      expect(findKthLargest(inputArray, 2)).toEqual(5)
    })
  })

  describe('with duplicate element', () => {
    const inputArray = [3, 2, 3, 1, 2, 4, 5, 5, 6]
    it('returns k-th largest element', () => {
      expect(findKthLargest(inputArray, 4)).toEqual(4)
    })
  })

  describe('with multiple duplicate element', () => {
    const inputArray = [3, 2, 3, 1, 2, 4, 5, 5, 6, 7, 7, 8, 2, 3, 1, 1, 1, 10, 11, 5, 6, 2, 4, 7, 8, 5, 6]
    it('returns k-th largest element', () => {
      expect(findKthLargest(inputArray, 2)).toEqual(10)
    })
  })
})
