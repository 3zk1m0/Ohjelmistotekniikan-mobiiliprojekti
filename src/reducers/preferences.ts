
const initState = {
    darkMode: false,
}



export default function reducer(state=[], action) {
    switch (action.type) {
      case 'TOGGLE_DARK_MODE':
        return {...state, darkMode: !state.darkMode }
      default:
        return state
    }
  }
