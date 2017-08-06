
/**
 * Converts { key: value } mappping to { key: key }
 *
 * @param {Object} obj
 * @returns {Object}
 */
export default function keyMirror(obj) {
  return Object.keys(obj).reduce((result, key) => {
    result[key] = key;
    return result;
  }, {});
}
