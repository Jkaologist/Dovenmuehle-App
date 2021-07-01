/*
 *
 * DisplayPage reducer
 *
 */
import produce from 'immer';
import { GET_STRINGS, REMOVE_STRING, RESET } from './constants';

export const initialState = { strings: [], id: 0 };

/* eslint-disable default-case, no-param-reassign */
const displayPageReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case GET_STRINGS:
        break;
      case REMOVE_STRING:
        draft.strings.filter(val => val.id !== action.id);
        break;
      case RESET:
        draft.strings = [];
        break;
    }
  });

export default displayPageReducer;
