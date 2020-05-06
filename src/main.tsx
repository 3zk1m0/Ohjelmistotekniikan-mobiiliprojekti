import React from "react";
import { Provider as PaperProvider } from "react-native-paper";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import store from "./store";
import RootNavigator from "./RootNavigator";

const persistedStore = persistStore(store);

export const Main = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistedStore}>
        <PaperProvider
          settings={{
            icon: (props) => <MaterialCommunityIcons {...props} />,
          }}
        >
          <RootNavigator />
        </PaperProvider>
      </PersistGate>
    </Provider>
  );
};
