import { AppActions } from "../types/actions"

export const toggleDarkMode = (): AppActions => (
  {
    type: "TOGGLE_DARK_MODE",
  }
)
export const toggleTag = (tag: string): AppActions => (
  {
    type: "TOGGLE_TAG",
    payload: tag,
  }
)
