import { PreferenceActionTypes } from "../types/actions";

const initState: {
  darkMode: boolean;
} = {
  darkMode: false,
};

export default (
  state = initState,
  action: PreferenceActionTypes
): typeof initState => {
  switch (action.type) {
    case "TOGGLE_DARK_MODE":
      return { ...state, darkMode: !state.darkMode };
    default:
      return state;
  }
};
