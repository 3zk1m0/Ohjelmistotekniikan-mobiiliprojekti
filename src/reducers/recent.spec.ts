import reducer, { initState }from './recent'
import * as types from '../types/actions'


describe('recent reducer', () => {

  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initState)
  })

  it('should handle appendRecent', () => {

    expect(
      reducer([0,0,0,0], {
        type: types.APPEND_RECENT,
        payload: 1 
      })
    ).toEqual([1,0,0,0])

    expect(
      reducer([1,0,0,0], {
        type: types.APPEND_RECENT,
        payload: 2 
      })
    ).toEqual([2,1,0,0])
  })
})