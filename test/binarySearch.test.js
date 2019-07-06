const search = require('../src/binarySearch')

describe('binary search', () => {
    describe('Given a sorted integer array and a target value', () => {
        const nums = [-1,0,3,5,9,12]
        const target = 9

        it('If target exists, return its index', () => {
            expect(search(nums, target)).toEqual(4)
        })
    })

    describe('Given a sorted integer array and a target value', () => {
        nums = [-1,0,3,5,9,12]
        const target = 2

        it('If target does not exist, return -1', () => {
            expect(search(nums, target)).toEqual(-1)
        })
    })
})
