import { connect } from 'react-redux';
import { compose } from 'recompose';
import ChatScreenView from './ChatScreenView';

const enhance = compose(connect());

export default enhance(ChatScreenView);
