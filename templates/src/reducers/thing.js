import * as ActionTypes from '../constants/ActionTypes';

const initState = {
  word: 'hello:)'
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.UPDATE_THING:
      return Object.assign({}, state, {
        word: action.word
      });
    default:
      return state;
  }
};
