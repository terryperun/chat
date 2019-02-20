import * as actions from './messageActions';
// import Api from '../../api/Api';
// import { createTask } from '../../utils/creators';
import { historyMessage } from '../../mocks';
// import { historyMessage } from '../../../mocks';

export const addMessage = (body) => async (dispatch) => {
  dispatch(actions.addMessageStart());

  try {
    dispatch(actions.addMessageOk(body));
  } catch (error) {
    dispatch(actions.addMessageError({ message: error.message }));
  }
};

// export const allMessage = (text) => async (dispatch) => {
//   dispatch(actions.allMessageStart());

//   try {
//     dispatch(actions.allMessageOk());
//   } catch (error) {
//     dispatch(actions.allMessageError({ message: error.message }));
//   }
// };
