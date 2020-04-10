/* eslint-disable no-console */

export const DISCLAIMER_ANSWER = 'DISCLAIMER_ANSWER';

// action creator
export function setDisclaimerAnswer(answer) {
  return {
    type: DISCLAIMER_ANSWER,
    answer,
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
