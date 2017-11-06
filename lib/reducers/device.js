import {
  SET_DEVICE_READY
} from '../actions/device';

export const DEVICE_INITIAL_STATE = {
  ready: false
};

export default (state = DEVICE_INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_DEVICE_READY:
      return {
        ...state,
        ready: true
      };

    default:
      return state;
  }
}
