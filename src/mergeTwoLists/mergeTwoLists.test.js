const mergeTwoLists = require('./mergeTwoLists')
const ListNode = require('./linkedListNode')
/*
* Merge two sorted linked lists and return it as a new list.
* The new list should be made by splicing together the nodes of the first two lists.
*   Example:
*   Input: 1->2->4, 1->3->4
*   Output: 1->1->2->3->4->4
 */

describe('mergeTwoLists', () => {
  describe('with input 1->2 and 3->4', () => {
    const list1 = new ListNode(1)
    list1.next = new ListNode(2)

    const list2 = new ListNode(3)
    list2.next = new ListNode(4)

    it('returns 1->2->3->4', () => {
      expect(mergeTwoLists(list1, list2).val).toEqual(1)
      expect(mergeTwoLists(list1, list2).next.val).toEqual(2)
      expect(mergeTwoLists(list1, list2).next.next.val).toEqual(3)
      expect(mergeTwoLists(list1, list2).next.next.next.val).toEqual(4)
    })
  })

  describe('with input 1->3 and 2->4', () => {
    const list1 = new ListNode(1)
    list1.next = new ListNode(3)

    const list2 = new ListNode(2)
    list2.next = new ListNode(4)

    it('returns 1->2->3->4', () => {
      expect(mergeTwoLists(list1, list2).val).toEqual(1)
      expect(mergeTwoLists(list1, list2).next.val).toEqual(2)
      expect(mergeTwoLists(list1, list2).next.next.val).toEqual(3)
      expect(mergeTwoLists(list1, list2).next.next.next.val).toEqual(4)
    })
  })

  describe('with input 1->3 and 2->4', () => {
    const list1 = new ListNode(1)
    list1.next = new ListNode(2)
    list1.next.next = new ListNode(4)

    const list2 = new ListNode(1)
    list2.next = new ListNode(3)
    list2.next.next = new ListNode(4)

    it('returns 1->2->3->4', () => {
      expect(mergeTwoLists(list1, list2).val).toEqual(1)
      expect(mergeTwoLists(list1, list2).next.val).toEqual(1)
      expect(mergeTwoLists(list1, list2).next.next.val).toEqual(2)
      expect(mergeTwoLists(list1, list2).next.next.next.val).toEqual(3)
      expect(mergeTwoLists(list1, list2).next.next.next.next.val).toEqual(4)
      expect(mergeTwoLists(list1, list2).next.next.next.next.next.val).toEqual(4)
    })
  })

  describe('with null input', () => {
    const list1 = new ListNode()
    const list2 = new ListNode()

    it('returns false', () => {
      expect(mergeTwoLists(list1, list2)).toBeFalsy()
    })
  })
})
