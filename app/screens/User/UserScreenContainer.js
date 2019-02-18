import { connect } from 'react-redux';
import { compose } from 'recompose';
import UserScreenView from './UserScreenView';

const enhance = compose(connect());

export default enhance(UserScreenView);
