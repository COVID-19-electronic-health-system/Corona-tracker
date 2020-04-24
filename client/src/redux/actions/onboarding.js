/* eslint-disable no-console */
export const FETCH_DEMOGRAPHICS_COMORBIDITIES = 'FETCH_DEMOGRAPHICS_COMORBIDITIES';

export const SET_DEMOGRAPHICS_COMORBIDITIES = 'SET_DEMOGRAPHICS_COMORBIDITIES';

export const RESET_DEMOGRAPHICS_COMORBIDITIES = 'RESET_DEMOGRAPHICS_COMORBIDITIES';

export const DISCLAIMER_ANSWER = 'DISCLAIMER_ANSWER';

export const RESET_ANSWER = 'RESET_ANSWER';

export const SUBSCRIBED_NUMBER = 'SUBSCRIBED_NUMBER';

export const UNSUBSCRIBE = 'UNSUBSCRIBE';

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

export function setDemographicsComorbidities(formData) {
  return {
    type: SET_DEMOGRAPHICS_COMORBIDITIES,
    formData,
  };
}

export function resetDemographicsComorbidities() {
  return {
    type: RESET_DEMOGRAPHICS_COMORBIDITIES,
  };
}

export const fetchDemographicsComorbidities = userSession => async dispatch => {
  const data = await userSession.getFile(`demographics-comorbidities.json`);
  if (data)
    dispatch({
      type: FETCH_DEMOGRAPHICS_COMORBIDITIES,
      payload: JSON.parse(data),
    });
};

export const setDemographicsComorbiditiesThunk = (formData, userSession) => async dispatch => {
  await userSession
    .putFile(`demographics-comorbidities.json`, JSON.stringify(formData))
    .then(() => 200)
    .catch(err => console.error(err));

  dispatch(setDemographicsComorbidities(formData));
};

export const setSubscribedNumber = (userSession, phoneNumber) => async dispatch => {
  userSession.putFile('subscribedNumber', phoneNumber).then(() => {
    dispatch({ type: SUBSCRIBED_NUMBER, phoneNumber });
  });
};

export const unsubscribeNumber = userSession => async dispatch => {
  console.log('calls unsubscribe');
  userSession.deleteFile('subscribedNumber').then(() => {
    dispatch({ type: UNSUBSCRIBE });
  });
};

export const fetchSubscribedNumber = userSession => async dispatch => {
  const phoneNumber = await userSession.getFile('subscribedNumber');
  dispatch({ type: SUBSCRIBED_NUMBER, phoneNumber });
};
