const maxSubArray = require('../src/maxSubArray')

describe('maxSubArray', () => {
    describe('Given an integer array nums', () => {
        const nums = [-2,1,-3,4,-1,2,1,-5,4]

        it(' find the contiguous subarray which has largest sum and returns the sum', () => {
            expect(maxSubArray(nums)).toEqual(6)
        })
    })

    describe('Given an single element array', () => {
        const nums = [1]

        it('returns the element', () => {
            expect(maxSubArray(nums)).toEqual(1)
        })
    })
})
