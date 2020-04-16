export const OPEN_BEHAVIOR = 'OPEN_BEHAVIOR';

const initialState = {
  isSubmitted: null,
};

const openBehaviorReducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_BEHAVIOR:
      return { isSubmitted: true };
    default:
      return state;
  }
};

export default openBehaviorReducer;
