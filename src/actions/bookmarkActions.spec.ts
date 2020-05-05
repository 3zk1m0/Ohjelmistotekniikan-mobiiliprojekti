import * as actions from './bookmarkActions'
import * as types from '../types/actions'

describe('actions', () => {
  it('Should create an action to toggle bookmark', () => {
    const expectedAction = {
      type: types.TOGGLE_BOOKMARK,
      payload: 1
    }
    expect(actions.toggleBookmark(1)).toEqual(expectedAction)
  })

})