import * as actions from './preferencesActions'
import * as types from '../types/actions'

describe('actions', () => {
  it('Should create an action to toggle dark mode', () => {
    const expectedAction = {
      type: types.TOGGLE_DARK_MODE,
    }
    expect(actions.toggleDarkMode()).toEqual(expectedAction)
  })

})