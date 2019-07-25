const binaryTreePaths = require('../src/binaryTreePath')
const TreeNode = require('../src/binaryTreeNode')

describe('binaryTreePaths', () => {
  describe('with only root node', () => {
    const root = new TreeNode(1)

    it('returns that node', () => {
      expect(binaryTreePaths(root)).toEqual(['1'])
    })
  })

  describe('with example input', () => {
    const root = new TreeNode(1)
    root.left = new TreeNode(2)
    root.left.right = new TreeNode(5)
    root.right = new TreeNode(3)

    it('returns two paths as next', () => {
      expect(binaryTreePaths(root)).toEqual(['1->2->5', '1->3'])
    })
  })

  describe('with null input', () => {
    it('returns null', () => {
      expect(binaryTreePaths()).toEqual([])
    })
  })

  describe('with node which has both left and right child', () => {
    const root = new TreeNode(1)
    root.left = new TreeNode(2)
    root.left.left = new TreeNode(5)
    root.left.right = new TreeNode(6)
    root.right = new TreeNode(3)

    it('returns each tree path', () => {
      expect(binaryTreePaths(root)).toEqual(['1->2->5', '1->2->6', '1->3'])
    })
  })
})
