import React from 'react';
import { UIManager } from 'react-native';
import RootNavigator from './app/navigation/RootNavigator';
import store from './app/store';
import { Provider } from 'react-redux';

if (UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const App = () => (
  <Provider store={store}>
    <RootNavigator />
  </Provider>
);

export default App;
