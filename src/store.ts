import { createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import { AsyncStorage } from "react-native";

import { logger } from './middleware/storage';
import rootReducer from "./reducers";

const middleware = applyMiddleware(logger)

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist:["recent", "bookmarks"]
}

const persistedReducer = persistReducer(persistConfig, rootReducer)


const store = createStore(persistedReducer, middleware);

export default store;