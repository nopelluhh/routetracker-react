 /**
 * @name stateToggle
 * @function 
 * @param {String} prop property of state to toggle
 * @returns {Function}
 */


export const stateToggle = prop => state => {
    return {
        [prop]: !state[prop]
    }
}