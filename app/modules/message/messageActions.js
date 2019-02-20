import { createAction } from 'redux-actions';
import types from './messageTypes';

export const addMessageStart = createAction(types.ADD_MESSAGE_START);
export const addMessageOk = createAction(types.ADD_MESSAGE_OK);
export const addMessageError = createAction(types.ADD_MESSAGE_ERROR);

export const allMessageStart = createAction(types.ALL_MESSAGE_START);
export const allMessageOk = createAction(types.ALL_MESSAGE_OK);
export const allMessageError = createAction(types.ALL_MESSAGE_ERROR);
