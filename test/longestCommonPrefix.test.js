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
        const strs = ['eat', 'english', 'element', 'eagle']

        it("returns that character", () => {
            expect(longestCommonPrefix(strs)).toEqual('e')
        })
    })

    describe('with input strings with 2 characters in common', () => {
        const strs = ['application', 'api', 'apple']

        it('returns those two character', () => {
            expect(longestCommonPrefix(strs)).toEqual('ap')
        })
    })

    describe('with two identical input strings', () => {
        const strs = ['at', 'at']

        it('returns those original strings', () => {
            expect(longestCommonPrefix(strs)).toEqual('at')
        })
    })

    describe('with empty input', () => {
        const strs = ['']

        it('returns "" ', () => {
            expect(longestCommonPrefix(strs)).toEqual('')
        })
    })
})
