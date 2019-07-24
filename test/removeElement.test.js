const removeElement = require('../src/removeElement')

describe('removeElement', () => {
  describe('with input array and value', () => {
    const nums = [3, 2, 2, 3]
    const value = 3

    it('remove all instances of the value and return updated length', () => {
      expect(removeElement(nums, value)).toEqual(2)
    })
  })

  describe('with input array and value', () => {
    const nums = [0, 1, 2, 2, 3, 0, 4, 2]
    const value = 2

    it('remove all instances of the value and return updated length', () => {
      expect(removeElement(nums, value)).toEqual(5)
    })
  })
})
