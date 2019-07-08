import { AppRegistry } from 'react-native';
import React from 'react';
import App from './app/App';
import { name as appName } from './app.json';
import { Provider } from 'react-redux';
import bgMessaging from './app/messaging/bgMessaging'; 

import configureStore from './app/store/store';

const store = configureStore()

const RNRedux = () => (
  <Provider store = { store }>
    <App />
  </Provider>
)

AppRegistry.registerComponent(appName, () => RNRedux);
AppRegistry.registerHeadlessTask('RNFirebaseBackgroundMessage', () => bgMessaging); // <-- Add this line