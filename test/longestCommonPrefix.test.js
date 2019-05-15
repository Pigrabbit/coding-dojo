const longestCommonPrefix = require('../src/longestCommonPrefix')

describe('longestCommonPrefix', () => {
    describe('with input strings with no common prefix', () => {
        const strs = ["dog", "racecar", "car"]

        it('returns ""', () => {
            expect(longestCommonPrefix(strs)).toEqual('')
        })
    })

    describe('with input strings with no character in common', () => {
        const strs = ['english', 'element', 'bagel']

        it("returns '' ", () => {
            expect(longestCommonPrefix(strs)).toEqual('')
        })
    })

    describe('with input strings with 1 character in common', () => {
        const strs = ['english', 'element', 'eagle']

        it("returns that character", () => {
            expect(longestCommonPrefix(strs)).toEqual('e')
        })
    })
})