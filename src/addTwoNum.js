class ListNode {
    constructor(val) {
        this._val = val
        this._next = null
    }

    get val() {
        return this._val
    }

    set val(newValue) {
        this._val = newValue
    }

    get next() {
        return this._next
    }

    set next(nextNode) {
        this._next = nextNode
    }
}

const addTwoNumbers = (list1, list2) => {
    // refactor it to recursive call
    let resultNode = new ListNode(0)

    let add = 0
    let sum = list1.val + list2.val
    if (sum >= 10) {
        sum = sum % 10
        add++
    }

    resultNode.val = sum
    resultNode.next = new ListNode(add)
    let currentNode = resultNode.next

    while(list1.next && list2.next) {
        list1 = list1.next
        list2 = list2.next

        let add = 0
        let sum = list1.val + list2.val + currentNode.val
        if (sum >= 10) {
            sum = sum % 10
            add++
        }

        currentNode.val = sum
        currentNode.next = new ListNode(add)
        currentNode = currentNode.next
    }

    return resultNode
}

let list1 = new ListNode(9)
list1.next = new ListNode(4)
list1.next.next = new ListNode(4)
console.log(list1)

let list2 = new ListNode(3)
list2.next = new ListNode(5)
list2.next.next = new ListNode(8)
console.log(list2)

console.log(addTwoNumbers(list1, list2))
