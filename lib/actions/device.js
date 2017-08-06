import Actions from '../constants/actions';

/**
 * Dispatched when Cordova device is ready
 *
 * @returns {Object}
 */
export function setDeviceReady() {
  return {
    type: Actions.SET_DEVICE_READY,
  };
}
