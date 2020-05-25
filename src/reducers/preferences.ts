import { PreferenceActionTypes } from "../types/actions";


const initState: {
  darkMode: boolean;
  tagList: string[];
} = {
  darkMode: false,
  tagList: [],
};

export default (
  state = initState,
  action: PreferenceActionTypes
): typeof initState => {
  switch (action.type) {
    case "TOGGLE_DARK_MODE":
      return { ...state, darkMode: !state.darkMode};
    case "TOGGLE_TAG":
      if (!state.tagList.includes(action.payload)) return {...state, tagList: [...state.tagList, action.payload]}
      return {...state, tagList: [...state.tagList].filter(tag => tag != action.payload)}
    default:
      return state;
  }
};
