import { SET_DISCLAIMER_MODAL } from '../actions/actions';

const INITIAL_STATE = {
    agreeToDisclaimer: false
}

const disclaimerReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SET_DISCLAIMER_MODAL:
            return {
              agreeToDisclaimer:action.agreeToDisclaimer
            }
        default:
            return state;
    }
}

export default disclaimerReducer;