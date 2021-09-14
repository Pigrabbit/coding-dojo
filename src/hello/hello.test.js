const hello = require('./hello')

describe('hello', () => {
  it('returns Hello World!', () => {
    expect(hello()).toEqual('Hello World!')
  })
})
