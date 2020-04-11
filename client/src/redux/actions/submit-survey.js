/* eslint-disable no-console */
import { addObservation } from './observations';
import { clearSurvey } from './survey';
export const SUBMIT_SURVEY = 'SUBMIT_SURVEY';

// action creator
export const submitSurvey = () => ({
  type: SUBMIT_SURVEY,
});

// thunk
export const submitSurveyThunk = (observation, userSession) => (dispatch, getState) => {
  const { numObservations } = getState().observationsReducer;
  const observationNumber = numObservations + 1;
  const fileNumber = `${observationNumber}`.padStart(7, '0');

  userSession
    .putFile(`observation.json`, JSON.stringify(observation))
    .then(() => {
      dispatch(submitSurvey());
      dispatch(addObservation(observation, observationNumber));
      dispatch(clearSurvey());
    })
    .catch(err => console.error(err));
};
