export default function reducer(state=[1,2,3], action) {
    switch (action.type) {
      case 'APPEND_RECENT':
        return state
      default:
        return state
    }
  }
