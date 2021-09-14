const stringFormat = require('./stringFormat')

describe('stringFormat', () => {
  describe('Given format string and arguments to replace with', () => {
    describe('when format string has single position to replace', () => {
      it('finds the position to replace and replace them', () => {
        const formatString = 'My name is {0}'
        const args = ['Kang']

        expect(stringFormat(formatString, args)).toEqual('My name is Kang')
      })
    })

    describe('when format string has more than one position to replace', () => {
      it('finds all the place to convert and replace them all', () => {
        const formatString = 'My name is {0} {1}'
        const args = ['Luis', 'Kang']

        expect(stringFormat(formatString, args)).toEqual('My name is Luis Kang')
      })
    })

    describe('when number of positions conversion needed and the number of argument do not match', () => {
      it('returns error', () => {
        const formatString = 'My name is {0} {1}'
        const args = ['Kang']

        expect(stringFormat(formatString, args)).toEqual('Number of arguments and positions do not match')
      })
    })
  })
})
