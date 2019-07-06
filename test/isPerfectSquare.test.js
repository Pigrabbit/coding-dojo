const isPerfectSquare = require('../src/isPerfectSquare')

describe('isPerfectSquare', () => {
    describe('Given a positive integer num', () => {
        it('returns false if num is not a perfect square number', () => {
            expect(isPerfectSquare(14)).toBeFalsy()
        })
    })
    
    describe('Given a positive integer num', () => {
        it('returns True if num is a perfect square number', () => {
            expect(isPerfectSquare(16)).toBeTruthy()
        })
    })
})
