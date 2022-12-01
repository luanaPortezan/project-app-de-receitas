import { INPUT_SEARCH, INPUT_SELECTED, RECIEPES } from '../actions/searchActions';

const INITIAL_STATE = {};

const selectedReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case INPUT_SEARCH:
    return {
      ...state,
      value: action.value,
    };
  case INPUT_SELECTED:
    return {
      ...state,
      inputSelected: action.input,
    };
  case RECIEPES:
    return {
      ...state,
      reciepes: action.reciepes,
    };
  default:
    return state;
  }
};

export default selectedReducer;
