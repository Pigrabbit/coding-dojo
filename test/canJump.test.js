const canJump = require('../src/canJump')

describe('canJump', () => {
    describe('with single element array with zero', () => {
        const nums = [0]

        it('returns true', () => {
            expect(canJump(nums)).toEqual(true)
        })
    })

    describe('with array without zero', () => {
        const nums = [2, 3, 1, 1, 4]

        it('returns true', () => {
            expect(canJump(nums)).toEqual(true)
        })
    })

    describe('when indexes converge to element 0 before last index', () => {
        const nums = [3, 2, 1, 0, 4]

        it('not able to jump to last index', () => {
            expect(canJump(nums)).toEqual(false)
        })
    })

    describe('when indexes do not converge to element 0 before last index', () => {
        const failedCase = [3, 0, 8, 2, 0, 0, 1]

        it('returns true', () => {
            expect(canJump(failedCase)).toEqual(true)
        })
    })
})
