import { SET_DISCLAIMER_MODAL } from '../actions/actions';
import Disclaimer from '../../components/Disclaimer';

const INITIAL_STATE = {
    showModal: false;
}

const DisclaimerReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SET_DISCLAIMER_MODAL:
            return {
                showModal:action.showModal
            }
        default:
            return state;
    }
}

export default DisclaimerReducer;