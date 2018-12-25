import React from 'react';
import { AppRegistry } from 'react-native';
import App from './src/components/App/';
import Display from './src/components/Plates-Display/';
import DisplayTwo from './src/components/Weight-Display/';

import { name as appName } from './app.json';
import { Provider } from 'react-redux';
import { Navigation } from 'react-native-navigation';
import configureStore from './src/store/';

const store = configureStore();

const Plates = props => {
  return (
    <Provider store={store}>
      <App {...props} />
    </Provider>
  );
};

const PlatesDisplay = props => {
  return (
    <Provider store={store}>
      <Display {...props} />
    </Provider>
  );
};

const PlatesDisplayTwo = props => {
  return (
    <Provider store={store}>
      <DisplayTwo {...props} />
    </Provider>
  );
};

AppRegistry.registerComponent(appName, () => Plates);
Navigation.registerComponent(`plates.main`, () => Plates);
Navigation.registerComponent(`plates.display`, () => PlatesDisplay);
Navigation.registerComponent(`plates.displayNew`, () => PlatesDisplayTwo);

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              id: 'plates.main',
              name: 'plates.main',
              options: {
                topBar: {
                  visible: false,
                },
              },
            },
          },
        ],
      },
    },
  });
});
