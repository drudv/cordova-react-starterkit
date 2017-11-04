
export const SET_DEVICE_READY = 'SET_DEVICE_READY';

/**
 * Dispatched when Cordova device is ready
 *
 * @returns {Object}
 */
export function setDeviceReady() {
  return {
    type: SET_DEVICE_READY,
  };
}
