import * as actions from './recentActions'
import * as types from '../types/actions'

describe('actions', () => {
  it('Should create an action to append recent', () => {
    const expectedAction = {
      type: types.APPEND_RECENT,
      payload: 1
    }
    expect(actions.appendRecent(1)).toEqual(expectedAction)
  })

})