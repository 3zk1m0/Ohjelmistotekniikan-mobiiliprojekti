import { createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import { AsyncStorage } from "react-native";

import logger from "redux-logger";
import { rootReducer } from "./reducers";

const middleware = applyMiddleware();

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  whitelist: ["recent", "bookmarks"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer, middleware);

export default store;
