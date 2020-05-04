import { AppActions } from "../types/actions"



export const addBookmark = (id: number): AppActions => (
  {
    type: "ADD_BOOKMARK",
    payload: id
  }
)

export const removeBookmark = (id: number): AppActions => (
  {
   type: "REMOVE_BOOKMARK",
   payload: id
  }
)