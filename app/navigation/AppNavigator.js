import { StackNavigator } from 'react-navigation';

import screens from './screens';
import { HomeScreen, ChatScreen, UserScreen } from '../screens';

const routes = {
  [screens.Home]: HomeScreen,
  [screens.Chat]: ChatScreen,
  [screens.User]: UserScreen,
};

const AppNavigator = StackNavigator(routes, {
  headerLayoutPreset: 'center',
});

export default AppNavigator;
