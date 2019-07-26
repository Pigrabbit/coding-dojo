class Vertex {
  constructor(value) {
    this.value = value
    this._edges = {}
  }

  get edges() {
    return this._edges
  }

  addEdge(vertex, weight = 0) {
    this._edges[vertex.value] = weight
  }

  removeEdge(vertex) {
    delete this._edges[vertex.value]
  }
}

module.exports = Vertex
