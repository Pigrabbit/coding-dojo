/**
 * Exmaple
 * Input: [4,2,5,7]
 * Output: [4,5,2,7]
 * Explanation: [4,7,2,5], [2,5,4,7], [2,7,4,5] would also have been accepted.
 *
 * Conditions
 * 1. 2 <= A.length <= 20000
 * 2. A.length % 2 == 0
 * 3. 0 <= A[i] <= 1000
*/

const sortArrayByParity = require('../src/sortArrayByParity')

describe('sortArrayByParity', () => {
  describe('Array that has odd element at even index and vice versa', () => {
    const inputArr = [1, 2]
    it('changes position of those two element', () => {
      expect(sortArrayByParity(inputArr)).toEqual([2, 1])
    })
  })

  describe('with example input', () => {
    const exampleInput = [4, 2, 5, 7]
    it('returns array which has odd number at odd index and even number at even index', () => {
      expect(sortArrayByParity(exampleInput)).toEqual([4, 5, 2, 7])
    })
  })

  describe('does not have other parity number at right next index', () => {
    const exmapleInput = [3, 5, 6, 2]
    it('need to find proper element at the next closest index', () => {
      expect(sortArrayByParity(exmapleInput)).toEqual([6, 5, 2, 3])
    })
  })
})
