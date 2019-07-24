const hello = require('../src/hello')

describe('hello', () => {
  it('returns Hello World!', () => {
    expect(hello()).toEqual('Hello World!')
  })
})
