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
    if (list1.next && list2.next) {
        addTwoNumbers(list1.next, list2.next)
    } else if (list1.next && !list2.next) {

    } else if (!list1.next && list2.next) {

    } else {
        let sum = list1.val + list2.val
        let resultNode = new ListNode()
        if (sum >= 10) {
            sum = sum % 10
            resultNode.val = sum
            resultNode.next = new ListNode(1)
        } else {
            resultNode.val = sum
        }

        return resultNode
    }
}

let list1 = new ListNode(9)
console.log(list1)

let list2 = new ListNode(3)
console.log(list2)

console.log(addTwoNumbers(list1, list2))
