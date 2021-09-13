// const Vertex = require('../src/vertex')
import Vertex from '../src/vertex'

describe('Vertex', () => {
  describe('getter Edge', () => {
    const seoul = new Vertex('Seoul')
    const la = new Vertex('LA')

    seoul.addEdge(la)

    it('returns information of edges which vertex has', () => {
      expect(Object.keys(seoul.edges)).toContain(la.value)
    })
  })

  describe('add edge', () => {
    describe('with weight', () => {
      const seoul = new Vertex('Seoul')
      const la = new Vertex('LA')

      const weight = 10
      seoul.addEdge(la, weight)

      it('store weight as value in edges object', () => {
        expect(seoul.edges[la.value]).toEqual(weight)
      })
    })

    describe('without weight', () => {
      const seoul = new Vertex('Seoul')
      const la = new Vertex('LA')
      const defalutWeight = 0
      seoul.addEdge(la)

      it('store weight as value in edges object', () => {
        expect(seoul.edges[la.value]).toEqual(defalutWeight)
      })
    })
  })

  describe('remove edge', () => {
    it('remove edge between two vertices', () => {
      const seoul = new Vertex('Seoul')
      const la = new Vertex('LA')

      seoul.addEdge(la)
      seoul.removeEdge(la)

      expect(seoul.edges).toStrictEqual({})
    })
  })
})
