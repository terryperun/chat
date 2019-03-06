import { connect } from 'react-redux';
import { compose, withState, withHandlers } from 'recompose';
import HomeScreenView from './HomeScreenView';

const mapStateToProps = (state) => ({
  data: state.message.data,
});

const enhance = compose(
  connect(
    mapStateToProps,
    {},
  ),
);

export default enhance(HomeScreenView);
