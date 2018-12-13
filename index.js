import React from "react";
import { AppRegistry } from "react-native";
import App from "./src/components/App/";

import { name as appName } from "./app.json";
import { Provider } from "react-redux";
import { Navigation } from "react-native-navigation";
import configureStore from "./src/store/";

const store = configureStore();

const Plates = props => {
  return (
    <Provider store={store}>
      <App {...props} />
    </Provider>
  );
};

AppRegistry.registerComponent(appName, () => Plates);
Navigation.registerComponent(`plates.main`, () => Plates);

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              id: "plates.main",
              name: "plates.main",
              options: {
                topBar: {
                  visible: false
                }
              }
            }
          }
        ]
      }
    }
  });
});
