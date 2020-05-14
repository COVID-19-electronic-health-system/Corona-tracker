export const RESET_QUIZ_SCORE = 'RESET_QUIZ_SCORE';
export const SET_QUIZ_SCORE = 'RESET_QUIZ_SCORE';

export function setQuizScore(quizScore) {
  return {
    type: SET_QUIZ_SCORE,
    quizScore: quizScore,
  };
}


export function resetQuizScore(quizScore) {
  console.log()
  return {
    type: RESET_QUIZ_SCORE,
    quizScore: quizScore,
  };
}