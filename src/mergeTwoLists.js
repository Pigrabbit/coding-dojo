/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const ListNode = require('../src/linkedListNode')

const mergeTwoLists = (list1, list2) => {
  if (!list1.val && !list2.val) {
    return false
  }

  const mergedList = new ListNode()

  // compare left most node val of each linked list
  if (list1.val <= list2.val) {
    mergedList.val = list1.val
    list1 = list1.next
  } else {
    mergedList.val = list2.val
    list2 = list2.next
  }

  // recursion
  if (list1 && list2) {
    mergedList.next = mergeTwoLists(list1, list2)
  } else if (list1 && !list2) {
    mergedList.next = list1
  } else if (!list1 && list2) {
    mergedList.next = list2
  }

  return mergedList
}

module.exports = mergeTwoLists
