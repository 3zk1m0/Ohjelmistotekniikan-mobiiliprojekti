
import { AppActions } from "../types/actions"

export const appendRecent = (id: number): AppActions => (
    {
      type: "APPEND_RECENT",
      payload: id
    }
  )
