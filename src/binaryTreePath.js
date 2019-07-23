/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
const binaryTreePaths = (root) => {
  const result = [];

  const traverse = (node, str) => {
    if (!node) {
      return;
    }
    if (!node.left && !node.right) {
      // leaf node
      result.push(str + node.val);
    }
    if (node.left) {
      traverse(node.left, `${str + node.val}->`);
    }
    if (node.right) {
      traverse(node.right, `${str + node.val}->`);
    }
  };

  traverse(root, '');

  return result;
};

module.exports = binaryTreePaths;
