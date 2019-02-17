import { compose, withHandlers } from 'recompose';

import UserListView from './UserListView';

const enhance = compose(
  withHandlers({
    cutMessage: (props) => (message) => {
      const shortMessage = message.substring(0, 40) + '...';
      return shortMessage;
    },
  }),
);

export default enhance(UserListView);
