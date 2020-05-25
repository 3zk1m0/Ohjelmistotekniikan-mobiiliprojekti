


export const TOGGLE_BOOKMARK = "TOGGLE_BOOKMARK";
export const ADD_BOOKMARK = "ADD_BOOKMARK";
export const REMOVE_BOOKMARK = "REMOVE_BOOKMARK";

export const TOGGLE_DARK_MODE = "TOGGLE_DARK_MODE";
export const TOGGLE_TAG = "TOGGLE_TAG";

export const APPEND_RECENT = "APPEND_RECENT";

export interface ToggleBookmarkAction {
    type: typeof TOGGLE_BOOKMARK;
    payload: number;
}
export interface AddBookmarkAction {
    type: typeof ADD_BOOKMARK;
    payload: number;
}
export interface RemoveBookmarkAction {
    type: typeof REMOVE_BOOKMARK;
    payload: number;
}

export interface ToggleDarkModeAction {
    type: typeof TOGGLE_DARK_MODE;
}

export interface ToggleTagAction {
    type: typeof TOGGLE_TAG;
    payload: string;
}

export interface AppendRecentAction {
    type: typeof APPEND_RECENT;
    payload: number;
}


export type BookmarkActionTypes = AddBookmarkAction | RemoveBookmarkAction | ToggleBookmarkAction;
export type PreferenceActionTypes = ToggleDarkModeAction | ToggleTagAction;
export type RecentActionTypes = AppendRecentAction;

export type AppActions = BookmarkActionTypes | PreferenceActionTypes | RecentActionTypes