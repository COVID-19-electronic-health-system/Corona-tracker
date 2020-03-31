import { SET_LOGIN_LOADING } from '../actions/login';

const initialState = {
  isLoading: false,
};

// Updating store based on type of the action
const login = (oldState = initialState, action) => {
  switch (action.type) {
    case SET_LOGIN_LOADING:
      return {
        isLoading: action.isLoading,
      };
    default:
      return oldState;
  }
};

export default login;
