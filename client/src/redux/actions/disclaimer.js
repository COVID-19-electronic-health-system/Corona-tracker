/* eslint-disable no-console */

export const DISCLAIMER_ANSWER = 'DISCLAIMER_ANSWER';
export const RESET_ANSWER = 'RESET_ANSWER';

// action creators
export function setDisclaimerAnswer(answer) {
  return {
    type: DISCLAIMER_ANSWER,
    answer,
  };
}

export function resetDisclaimerAnswer() {
  return {
    type: RESET_ANSWER,
  };
}

// thunk
export const setDisclaimerAnswerThunk = (answer, disclaimerAnswerJSON, userSession) => async dispatch => {
  await userSession
    .putFile(`disclaimer.json`, JSON.stringify(disclaimerAnswerJSON))
    .then(() => 200)
    .catch(err => console.error(err));

  dispatch(setDisclaimerAnswer(answer));
};
