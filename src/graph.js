class Graph {
  constructor(isDirected = false) {
    this.isDirected = isDirected
    this._graphDict = {}
  }

  get graphDict() {
    return this._graphDict
  }

  addVertex(vertex) {
    this._graphDict[vertex.value] = vertex
  }

  addEdge(fromVertex, toVertex, weight = 0) {
    this._graphDict[fromVertex.value].addEdge(toVertex, weight)
    if (!this.isDirected) {
      this._graphDict[toVertex.value].addEdge(fromVertex, weight)
    }
  }

  findPath(fromVertex, toVertex) {
    const start = [fromVertex]
    const seen = {}
    while (start.length > 0) {
      const currentVertex = start.shift()
      seen[currentVertex] = true
      console.log(`Visiting ${currentVertex}`)

      if (currentVertex === toVertex) {
        return true
      }
      let verticesToVisit = Object.keys(this._graphDict[currentVertex].edges)
      verticesToVisit = verticesToVisit.filter(vertex => !seen[vertex])

      while (verticesToVisit.length > 0) {
        start.push(verticesToVisit.pop())
      }
    }
    return false
  }
}

module.exports = Graph
