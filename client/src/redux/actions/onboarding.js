/* eslint-disable no-console */
/* eslint import/no-cycle: "off" */

import axios from 'axios';

import { changedObservations } from './observations';

import convertUnits from '../../utils/convertTempUnit';

export const FETCH_DEMOGRAPHICS_COMORBIDITIES = 'FETCH_DEMOGRAPHICS_COMORBIDITIES';

export const SET_DEMOGRAPHICS_COMORBIDITIES = 'SET_DEMOGRAPHICS_COMORBIDITIES';

export const RESET_DEMOGRAPHICS_COMORBIDITIES = 'RESET_DEMOGRAPHICS_COMORBIDITIES';

export const DISCLAIMER_ANSWER = 'DISCLAIMER_ANSWER';

export const RESET_ANSWER = 'RESET_ANSWER';

export const FETCH_SUBSCRIBED_NUMBER = 'FETCH_SUBSCRIBED_NUMBER';

export const SET_SUBSCRIBED_NUMBER = 'SET_SUBSCRIBED_NUMBER';

export const SUBSCRIBE_ERROR = 'SUBSCRIBE_ERROR';

export const UNSUBSCRIBE = 'UNSUBSCRIBE';

export const CLEAR_RESPONSE = 'CLEAR_RESPONSE';

export const SET_TEMP_UNIT = 'SET_TEMP_UNIT';

export const FETCH_TEMP_UNIT = 'FETCH_TEMP_UNIT';

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

export function clearResponse() {
  return {
    type: CLEAR_RESPONSE,
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
  else
    dispatch({
      type: FETCH_DEMOGRAPHICS_COMORBIDITIES,
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
  axios
    .post(
      'https://kplh25sfce.execute-api.us-east-1.amazonaws.com/default/coronalert-subscribe',
      { phoneNumber },
      { headers: { 'Content-Type': 'application/json' } }
    )
    .then(res => {
      if (res.data.phoneNumber) {
        userSession.putFile('subscribedNumber', phoneNumber).then(() => {
          dispatch({ type: SET_SUBSCRIBED_NUMBER, phoneNumber });
        });
      }
    })
    .catch(error => dispatch({ type: SUBSCRIBE_ERROR, error }));
};

export const unsubscribeNumber = (userSession, phoneNumber) => {
  return async dispatch => {
    const response = await axios
      .post('https://kplh25sfce.execute-api.us-east-1.amazonaws.com/default/coronalert-unsubscribe', { phoneNumber })
      .then(() =>
        userSession.deleteFile('subscribedNumber').then(() => {
          dispatch({ type: UNSUBSCRIBE });
        })
      )
      .catch(error => dispatch({ type: SUBSCRIBE_ERROR, error }));
    return response;
  };
};

export const fetchSubscribedNumber = userSession => async dispatch => {
  const phoneNumber = await userSession.getFile('subscribedNumber');
  dispatch({ type: FETCH_SUBSCRIBED_NUMBER, phoneNumber });
  return phoneNumber;
};

export const setTempUnit = (userSession, currentObservations, currentUnit, nextUnit) => async dispatch => {
  if (nextUnit === currentUnit) return;
  const nextObservations = currentObservations.map(obs => {
    return {
      ...obs,
      physical: {
        ...obs.physical,
        feverSeverity: convertUnits(nextUnit, obs.physical.feverSeverity),
      },
    };
  });
  dispatch(changedObservations(nextObservations));
  dispatch({ type: SET_TEMP_UNIT, nextUnit });
  userSession.putFile('tempUnit', nextUnit);
};

export const fetchTempUnit = userSession => async dispatch => {
  const tempUnit = await userSession.getFile('tempUnit');
  if (tempUnit) {
    dispatch({ type: FETCH_TEMP_UNIT, tempUnit });
  }
  return true;
};
