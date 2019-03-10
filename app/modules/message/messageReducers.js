import { handleActions } from 'redux-actions';
import types from './messageTypes';
import uuid from 'uuid/v4';

const initialState = {
  messages: [
    {
      id: uuid(),
      fromUser: 'Taras',
      toUser: 'Reeves',
      message: '6',
      dateTime: '1552862500000',
    },
    {
      id: uuid(),
      fromUser: 'Taras',
      toUser: 'Reeves',
      message: '5',
      dateTime: '1552860000000',
    },
    {
      id: uuid(),
      fromUser: 'Taras',
      toUser: 'Reeves',
      message: '4',
      dateTime: '1532046058000',
    },
    {
      id: uuid(),
      fromUser: 'Reeves',
      toUser: 'Taras',
      message: '3',
      dateTime: '1532046000000',
    },
    {
      id: uuid(),
      fromUser: 'Reeves',
      toUser: 'Taras',
      message: '2',
      dateTime: '1530407718000',
    },
    {
      id: uuid(),
      fromUser: 'Reeves',
      toUser: 'Taras',
      message: '1',
      dateTime: '1520404418000',
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
      return {
        ...state,
        isLoading: false,
        messages: [action.payload, ...state.messages],
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
      // messages: action.payload.newTodo,
    }),
    [types.ALL_MESSAGE_ERROR]: (state, action) => ({
      ...state,
      error: action.payload,
    }),
  },
  initialState,
);

export default messageReducer;
