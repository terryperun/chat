import React from 'react';
import RootNavigator from './app/navigation/RootNavigator';
import store from './app/store';
import { Provider } from 'react-redux';

const App = () => (
  <Provider store={store}>
    <RootNavigator />
  </Provider>
);

export default App;
