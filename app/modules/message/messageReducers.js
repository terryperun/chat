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
      dateTime: 1522082500000, //Mon Mar 26 2018 19:41:40
    },
    {
      id: uuid(),
      fromUser: 'Taras',
      toUser: 'Reeves',
      message: '5',
      dateTime: 1522080000000, //Mon Mar 26 2018 19:00:00
    },
    {
      id: uuid(),
      fromUser: 'Taras',
      toUser: 'Reeves',
      message: '4',
      dateTime: 1522060000000, //Mon Mar 26 2018 13:26:40
    },
    {
      id: uuid(),
      fromUser: 'Reeves',
      toUser: 'Taras',
      message: '3',
      dateTime: 1512046000000, //Thu Nov 30 2017 14:46:40
    },
    {
      id: uuid(),
      fromUser: 'Reeves',
      toUser: 'Taras',
      message: '2',
      dateTime: 1500407718000, //Tue Jul 18 2017 22:55:18
    },
    {
      id: uuid(),
      fromUser: 'Reeves',
      toUser: 'Taras',
      message: '1',
      dateTime: 1500404418000, //Tue Jul 18 2017 22:00:18
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
