const reverseInteger = require('../src/reverseInteger')

describe('reverseInteger', () => {
    describe('with input 123', () => {
        it('returns 321', () => {
            expect(reverseInteger(123)).toEqual(321)
        })
    })

    describe('with input -123', () => {
        it('returns -321', () => {
            expect(reverseInteger(-123)).toEqual(-321)
        })
    })

    describe('with input 120', () => {
        it('returns 21', () => {
            expect(reverseInteger(120)).toEqual(21)
        })
    })

    describe('with overflow input', () => {
        it('returns 0', () => {
            expect(reverseInteger(1534236469)).toEqual(0)
        })
    })
})