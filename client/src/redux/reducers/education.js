import { SET_QUIZ_SCORE, RESET_QUIZ_SCORE, UPDATE_SCORE } from '../actions/education';

const initialState = {
  score: 0,
  quizSize: 0,
  showQuizScoreDialog: false,
};

const educationReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_QUIZ_SCORE:
      return {
        ...state,
        score: action.quizScore.score,
        quizSize: action.quizScore.quizSize,
        showQuizScoreDialog: action.quizScore.showQuizScoreDialog,
      };
    case RESET_QUIZ_SCORE:
      return {
        ...state,
        score: action.quizScore.score,
        quizSize: action.quizScore.quizSize,
        showQuizScoreDialog: action.quizScore.showQuizScoreDialog,
      };
    case UPDATE_SCORE:
      return {
        ...state,
        score: action.quizScore.score,
      };
    default:
      return state;
  }
};

export default educationReducer;
