const ListNode = require('../src/linkedListNode')

const addTwoNumbers = (list1, list2) => {
    let sum = list1.val + list2.val
    let resultNode = new ListNode(sum)
    if (list1.next && list2.next) {
        resultNode.next = addTwoNumbers(list1.next, list2.next)
    } else if (list1.next && !list2.next) {
        resultNode.next = list1.next
    } else if (!list1.next && list2.next) {
        resultNode.next = list2.next
    }

    return adder(resultNode)
}

const adder = (listNode) => {
    if (listNode.val >= 10) {
        listNode.val %= 10

        if (listNode.next) {
            listNode.next.val += 1
            listNode.next = adder(listNode.next)
        } else {
            listNode.next = new ListNode(1)
        }
    }
    return listNode
}
