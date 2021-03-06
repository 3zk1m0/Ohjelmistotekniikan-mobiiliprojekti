import { RecentActionTypes } from "../types/actions";

export const recentLenght: number = 10;

export const initState: number[] = Array(recentLenght).fill(0);

export default (state = initState, action: RecentActionTypes): number[] => {
  //return Array(recentLenght).fill(0)
  switch (action.type) {
    case "APPEND_RECENT":
      if (state.includes(action.payload)) {
        state.findIndex((x) => x == action.payload)
        let tmp = [...state].filter((x) => x != action.payload)
        tmp.unshift(action.payload);
        return tmp;
      } else {
        let tmp = [...state];
        tmp.unshift(action.payload);
        tmp.pop();
        return tmp;
      }
    default:
      return state;
  }
};
