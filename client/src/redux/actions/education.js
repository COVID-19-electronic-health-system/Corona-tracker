export const RESET_QUIZ_SCORE = 'RESET_QUIZ_SCORE';
export const SET_QUIZ_SCORE = 'RESET_QUIZ_SCORE';
export const UPDATE_SCORE = 'UPDATE_SCORE';

export function updateQuizScore(quizScore) {
  return {
    type: UPDATE_SCORE,
    quizScore: {
      score: quizScore.score,
    },
  };
}

export function setQuizScore(quizScore) {
  return {
    type: SET_QUIZ_SCORE,
    quizScore: {
      score: quizScore.score,
      quizSize: quizScore.quizSize,
      showQuizScoreDialog: true,
    },
  };
}

export function resetQuizScore() {
  return {
    type: RESET_QUIZ_SCORE,
    quizScore: {
      score: 0,
      quizSize: 0,
      showQuizScoreDialog: false,
    },
  };
}
