import { SUBMIT_SURVEY } from '../reducers/submit-survey';

// action creator
export const submitSurvey = () => ({
  type: SUBMIT_SURVEY,
});

// thunk
export const submitSurveyThunk = (fileNumber, observation, encryptOptions, userSession) => async dispatch => {
  await userSession
    .putFile(`observation/${fileNumber}.json`, JSON.stringify(observation), encryptOptions)
    .then(() => 200)
    .catch(err => console.error(err));

  dispatch(submitSurvey());
};
