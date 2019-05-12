import {addTwoNumbers, ListNode} from '../src/addTwoNum'
/*
Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 0 -> 8
Explanation: 342 + 465 = 807.
*/
describe('addTwoNumbers', () => {
    describe('with input list nodes which have 2 and 3 as value', () => {
        it('returns node which has 5 as value', () => {
            expect(addTwoNumbers(new ListNode(2) , new ListNode(3)).val).toEqual(5)
        })
    })
})