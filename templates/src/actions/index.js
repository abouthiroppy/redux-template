import * as ActionTypes from '../constants/ActionTypes';

export const updateThing = (thing) => {
  return {
    type: ActionTypes.UPDATE_THING,
    thing
  };
};
