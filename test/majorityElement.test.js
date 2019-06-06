const majorityElement = require('../src/majorityElement')

describe('majorityElement', () => {
    describe('Given an array of size n,', () => {
        const exampleInput = [3, 2, 3]
        exampleInput[0] = 3

        it('find the majority element', () => {
            expect(majorityElement(exampleInput)).toEqual(3)
        })
    })

    describe('Given an array of size n', () => {
        const exampleInput = [2,2,1,1,1,2,2]

        it('find the majority element', () => {
            expect(majorityElement(exampleInput)).toEqual(2)
        })
    })
})
