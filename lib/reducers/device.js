import Actions from '../constants/actions';

export const DEVICE_INITIAL_STATE = {
  ready: false
};

export default (state = DEVICE_INITIAL_STATE, action) => {
  switch (action.type) {
    case Actions.SET_DEVICE_READY:
      return {
        ...state,
        ready: true
      };

    default:
      return state;
  }
}
