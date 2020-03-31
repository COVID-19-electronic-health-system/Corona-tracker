import { DISCLAIMER_ANSWER } from './actions';

//thunk
export const setDisclaimerAnswerThunk = (answer, disclaimerAnswerJSON, userSession) => async dispatch => {
  await userSession
    .putFile(`disclaimer.json`, JSON.stringify(disclaimerAnswerJSON))
    .then(res => 200)
    .catch(err => console.error(err));

  dispatch(setDisclaimerAnswer(answer));
};

//action creator
export function setDisclaimerAnswer(answer) {
  return {
    type: DISCLAIMER_ANSWER,
    answer,
  };
}
