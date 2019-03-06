import { connect } from 'react-redux';
import { compose, withHandlers, withState } from 'recompose';
import ChatScreenView from './ChatScreenView';
import * as messageOperations from '../../modules/message/messageOperations';
import { withNavigation } from 'react-navigation';

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
        fromUser: 'Reeves',
        toUser: 'Taras',
        message: text,
        dateTime: new Date(2019, 2, 19),
      });
      const mess = body(props.messageInputText);
      props.sendMessage(mess);
      props.setMessageInputText('');
    },
  }),
);

export default enhance(ChatScreenView);
