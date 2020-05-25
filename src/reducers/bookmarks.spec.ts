import reducer from './bookmarks'
import * as types from '../types/actions'

describe('bookmarks reducer', () => {

  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual([])
  })

  it('should handle ToggleBookmark', () => {
    expect(
      reducer([], {
        type: types.TOGGLE_BOOKMARK,
        payload: 1 
      })
    ).toEqual([1])

    expect(
      reducer([1], {
        type: types.TOGGLE_BOOKMARK,
        payload: 1 
      })
    ).toEqual([])
  })
})