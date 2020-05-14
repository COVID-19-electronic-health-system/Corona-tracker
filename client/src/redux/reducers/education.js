import { SET_QUIZ_SCORE, RESET_QUIZ_SCORE } from '../actions/education';

const initialState = {
  score: 0,
  quizSize: 0,
};

const educationReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_QUIZ_SCORE:
      return {
        ...state,
        score: action.quizScore.score,
        quizSize: action.quizScore.quizSize,
      };
    case RESET_QUIZ_SCORE:
      return {
        ...state,
        score: action.quizScore.score,
        quizSize: action.quizScore.quizSize,
      };
    default:
      return state;
  }
};

export default educationReducer;
