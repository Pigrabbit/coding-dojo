class TreeNode {
  constructor(value) {
    this.value = value
    this.children = []
  }

  addChild(childNode) {
    console.log(`Adding ${childNode.value}`)
    this.children.push(childNode)
  }

  removeChild(childNode) {
    console.log(`Removing ${childNode.value} from ${this.value}`)
    const newChildren = []
    for (let i = 0; i < this.children.length; i++) {
      if (this.children[i] !== childNode) {
        newChildren.push(this.children[i])
      }
    }
    this.children = newChildren
  }

  traverse() {
    let nodesToVisit = [this]
    while (nodesToVisit.length > 0) {
      const currentNode = nodesToVisit.pop()
      nodesToVisit += currentNode.children
    }
  }
}

const root = new TreeNode('I am Groot')
const childA = new TreeNode('I am Child A')
const childB = new TreeNode('I am Child B')
const childC = new TreeNode('I am Child C')

const smallChildA = new TreeNode('I am small Child a')
const smallChildB = new TreeNode('I am small Child b')
const smallChildC = new TreeNode('I am small Child c')

root.addChild(childA)
root.addChild(childB)
console.log(root)

root.removeChild(childB)
console.log(root)

root.addChild(childC)
childA.addChild(smallChildA)
childA.addChild(smallChildB)
childA.addChild(smallChildC)

childA.traverse()
