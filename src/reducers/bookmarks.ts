


export default function reducer(state=[], action) {
    switch (action.type) {
      case 'ADD_BOOKMARK':
        if (state.includes(action.payload)) return [...state]
        return [...state, action.payload]
      case 'REMOVE_BOOKMARK':
        return [...state].filter(id => id != action.payload);
      default:
        return state
    }
    
  }
