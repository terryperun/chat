import { handleActions } from 'redux-actions';
import types from './messageTypes';
import uuid from 'uuid/v4';

const initialState = {
  historyMessage: [
    {
      id: uuid(),
      fromUser: 'Reeves',
      toUser: 'Taras',
      message: 'Hello',
      dateTime: '1552860000000',
    },
    {
      id: uuid(),
      fromUser: 'Taras',
      toUser: 'Reeves',
      message: 'Hello its test',
      dateTime: '1552861800000',
    },
    {
      id: uuid(),
      fromUser: 'Reeves',
      toUser: 'Taras',
      message: 'Hello',
      dateTime: '1552863600000',
    },
    {
      id: uuid(),
      fromUser: 'Taras',
      toUser: 'Reeves',
      message: 'Hello its test',
      dateTime: '1552867200000',
    },
  ],
  data: [
    {
      id: 3,
      name: 'Tor Molovuch',
      time: new Date().getTime(),
      lastMessage: 'HelloHelloHelloHelloHelloHelloHelloHello Hello ',
      countNewMessage: 3,
    },
    {
      id: 4,
      name: 'Tor Molovuch',
      time: new Date().getTime(),
      lastMessage: 'Hello',
      countNewMessage: 3,
    },
    {
      id: 5,
      name: 'Vilen Oma',
      time: new Date().getTime(),
      lastMessage: 'Hello',
      countNewMessage: 3,
    },
  ],
  isLoading: false,
  error: null,
};

const messageReducer = handleActions(
  {
    [types.ADD_MESSAGE_START]: (state, action) => ({
      ...state,
      isLoading: true,
      error: null,
    }),
    [types.ADD_MESSAGE_OK]: (state, action) => {
      console.log('IN_REDUCER==============================', action);
      return {
        ...state,
        isLoading: false,
        historyMessage: [action.payload, ...state.historyMessage],
      };
    },
    [types.ADD_MESSAGE_ERROR]: (state, action) => ({
      ...state,
      error: action.payload,
    }),

    [types.ALL_MESSAGE_START]: (state, action) => ({
      ...state,
      isLoading: true,
      error: null,
    }),
    [types.ALL_MESSAGE_OK]: (state, action) => ({
      ...state,
      isLoading: false,
      // historyMessage: action.payload.newTodo,
    }),
    [types.ALL_MESSAGE_ERROR]: (state, action) => ({
      ...state,
      error: action.payload,
    }),
  },
  initialState,
);

export default messageReducer;
