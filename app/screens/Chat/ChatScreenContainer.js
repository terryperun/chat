import { connect } from 'react-redux';
import { compose, withHandlers, withState } from 'recompose';
import ChatScreenView from './ChatScreenView';
import * as messageOperations from '../../modules/message/messageOperations';
import { withNavigation } from 'react-navigation';
import uuid from 'uuid/v4';

import s from './styles';

const mapStateToProps = (state) => ({
  state: state,
  data: state.message.data,
  messages: state.message.messages,
});

const sortForData = (arr) => {
  let time;
  const sorted = arr.reduce((acc, current) => {
    time = current.dataTime;
  }, {});
};

const enhance = compose(
  connect(
    mapStateToProps,
    {
      sendMessage: messageOperations.addMessage,
    },
  ),
  withNavigation,
  withState('messageInputText', 'setMessageInputText', ''),
  withState(
    'name',
    'setName',
    (props) => props.navigation.state.params.name,
  ),
  withHandlers({
    onSend: (props) => () => {
      const body = (text) => ({
        id: uuid(),
        fromUser: 'Taras',
        toUser: 'Reeves',
        message: text,
        dateTime: new Date().getTime().toString(),
      });
      const mess = body(props.messageInputText);
      if (props.messageInputText.trim().length > 0) {
        props.sendMessage(mess);
        props.setMessageInputText('');
      }
    },
  }),
);

export default enhance(ChatScreenView);
