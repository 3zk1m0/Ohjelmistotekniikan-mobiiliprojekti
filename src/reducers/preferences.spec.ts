import reducer from './preferences'
import * as types from '../types/actions'

describe('preferences reducer', () => {

  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({darkMode: false})
  })

  it('should handle ToggleDarkMode', () => {
    expect(
      reducer({darkMode: false}, {
        type: types.TOGGLE_DARK_MODE,
      })
    ).toEqual({darkMode: true})

    expect(
      reducer({darkMode: true}, {
        type: types.TOGGLE_DARK_MODE,
      })
    ).toEqual({darkMode: false})
  })
})