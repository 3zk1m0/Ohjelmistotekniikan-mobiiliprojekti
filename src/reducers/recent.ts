import { RecentActionTypes } from "../types/actions";


const recentLenght:number = 10;

const initState:number[] = Array(recentLenght).fill(0);

export default (state = initState, action:RecentActionTypes):number[] => {
  //return Array(recentLenght).fill(0)
  switch (action.type) {
    case "APPEND_RECENT":
      if (state.includes(action.payload)) return [...state];
      return [...state, action.payload].slice(1, recentLenght);
    default:
      return state;
  }
};
