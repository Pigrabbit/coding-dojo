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

module.exports = ListNode
