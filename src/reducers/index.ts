import { combineReducers } from 'redux'
import bookmarks from './bookmarks'
import recent from './recent'
import preferences from './preferences';

export default combineReducers({
    bookmarks,
    recent,
    preferences,
})