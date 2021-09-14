const Graph = require('./graph')
const Vertex = require('./vertex')

describe('Graph', () => {
  describe('addVertex', () => {
    it('add vertex into graph', () => {
      const cities = new Graph()
      const seoul = new Vertex('Seoul')

      cities.addVertex(seoul)

      expect(Object.keys(cities.graphDict)).toContain(seoul.value)
    })
  })

  describe('addEdge', () => {
    describe('Given undirectional graph', () => {
      it('add edge between two different vertex which already exist in graph', () => {
        const cities = new Graph()
        const seoul = new Vertex('Seoul')
        const la = new Vertex('LA')

        cities.addVertex(seoul)
        cities.addVertex(la)
        cities.addEdge(seoul, la)

        expect(Object.keys(seoul.edges)).toContain(la.value)
        expect(Object.keys(la.edges)).toContain(seoul.value)
      })
    })

    describe('Given directional graph', () => {
      it('add edge between two different vertex which already exist in graph', () => {
        const isDirected = true
        const cities = new Graph(isDirected)
        const seoul = new Vertex('Seoul')
        const la = new Vertex('LA')

        cities.addVertex(seoul)
        cities.addVertex(la)
        cities.addEdge(seoul, la)

        expect(Object.keys(seoul.edges)).toContain(la.value)
        expect(Object.keys(la.edges).length).toEqual(0)
      })
    })
  })

  describe('find path', () => {
    it('finds path between two vertices', () => {
      const isDirected = true
      const cities = new Graph(isDirected)
      const seoul = new Vertex('Seoul')
      const la = new Vertex('LA')
      const newYork = new Vertex('New York')
      const chicago = new Vertex('Chicago')

      cities.addVertex(seoul)
      cities.addVertex(la)
      cities.addVertex(newYork)
      cities.addVertex(chicago)

      cities.addEdge(seoul, la)
      cities.addEdge(la, newYork)

      expect(cities.findPath('Seoul', 'New York')).toEqual(true)
    })
  })
})
