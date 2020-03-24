import { SET_NAVBAR_SECTION } from './actions';

export const setNavbarSection = section => {
console.log('avtion', section)

return ({
    type: SET_NAVBAR_SECTION,
    payload: section
})}