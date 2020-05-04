import { combineReducers } from 'redux'
import bookmarks from './bookmarks'
import recent from './recent'
import preferences from './preferences';

export const rootReducer = combineReducers({
    bookmarks,
    recent,
    preferences,
})

export type AppState = ReturnType<typeof rootReducer>