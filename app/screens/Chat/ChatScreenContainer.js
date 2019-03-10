import { connect } from 'react-redux';
import { compose, withHandlers, withState } from 'recompose';
import ChatScreenView from './ChatScreenView';
import * as messageOperations from '../../modules/message/messageOperations';
import { withNavigation } from 'react-navigation';
import uuid from 'uuid/v4';

const mapStateToProps = (state) => ({
  state: state,
  data: state.message.data,
  messages: state.message.messages,
});

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
        dateTime: new Date().getTime(),
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
