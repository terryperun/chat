import { compose, withHandlers } from 'recompose';
import { withNavigation } from 'react-navigation';

import UserListView from './UserListView';

const enhance = compose(
  withNavigation,
  withHandlers({
    cutMessage: (props) => (message) => {
      const shortMessage = message.substring(0, 20) + '...';
      return shortMessage;
    },
    onPress: (props) => () => {
      props.navigation.navigate('Chat', {
        id: props.id,
        name: props.name,
      });
    },
  }),
);

export default enhance(UserListView);
