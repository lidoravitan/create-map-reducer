const { createReducer } = require('../src')

const INCREMENT = 'INCREMENT'
const increment = { type: INCREMENT }
const handlers = {
  [INCREMENT]: (prevState, action) => prevState + 1
}

describe('createReducer', () => {
  let reducer
  beforeAll(() => {
    reducer = createReducer(0, handlers)
  })

  test('should return function', () => {
    expect(typeof reducer).toBe('function')
  })

  test('should initial state', () => {
    expect(reducer(undefined, { type: 'INCREMENT' })).toBe(1)
  })

  test('should reduce state properly', () => {
    expect(reducer(0, increment)).toBe(1)
    expect(reducer(0, {})).toBe(0)
  })
})
