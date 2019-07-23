class TreeNode {
  constructor(val) {
    this._val = val;
    this._left = this._right = null;
  }

  get val() {
    return this._val;
  }

  set val(newValue) {
    this._val = newValue;
  }

  get left() {
    return this._left;
  }

  set left(node) {
    this._left = node;
  }

  get right() {
    return this._right;
  }

  set right(node) {
    this._right = node;
  }
}

module.exports = TreeNode;
