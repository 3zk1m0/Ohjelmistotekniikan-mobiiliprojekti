import { RecentActionTypes } from "../types/actions";

const initState: number[] = [];

export default (state = initState, action: RecentActionTypes): number[] => {
  switch (action.type) {
    case "APPEND_RECENT":
      return state;
    default:
      return state;
  }
};
