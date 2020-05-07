/* eslint-disable no-console */
/* eslint import/no-cycle: "off" */

import {
  getObservations,
  postObservationsList,
  postSingleObservation,
  deleteObservationsList,
  deleteObservationFiles,
} from '../../utils/blockstackHelpers';
import { FETCH_TEMP_UNIT } from './onboarding';
import convertTempUnit from '../../utils/convertTempUnit';

export const ADD_OBSERVATION = 'ADD_OBSERVATION';
export const DELETE_OBSERVATIONS = 'DELETE_OBSERVATIONS';
export const FETCH_OBSERVATIONS = 'FETCH_OBSERVATIONS';
export const CHANGED_OBSERVATIONS = 'CHANGED_OBSERVATIONS';

export function resetObservations() {
  return {
    type: DELETE_OBSERVATIONS,
  };
}

export const changedObservations = observations => {
  return { type: CHANGED_OBSERVATIONS, observations };
};

export function addObservationToStore(observation) {
  return {
    type: ADD_OBSERVATION,
    payload: observation,
  };
}

export const addObservation = (userSession, observation, tempUnit) => async dispatch => {
  let adjustedObservation = observation;
  if (tempUnit === 'celsius') {
    adjustedObservation = {
      ...observation,
      physical: {
        ...observation.physical,
        feverSeverity: convertTempUnit('fahrenheit', observation.physical.feverSeverity),
      },
    };
  }
  const obs = await getObservations(userSession);
  let obsArray;
  let fileNumber = 1;
  if (obs) {
    const currentArray = JSON.parse(obs);
    fileNumber = currentArray.length + 1;
    obsArray = [...currentArray, adjustedObservation];
  } else {
    obsArray = [adjustedObservation];
  }
  postObservationsList(userSession, obsArray, fileNumber).then(didPost => {
    if (didPost) {
      postSingleObservation(userSession, adjustedObservation, fileNumber);
      dispatch(addObservationToStore(adjustedObservation));
    }
  });
};

export const deleteObservations = userSession => async dispatch => {
  const obs = await getObservations(userSession);
  if (obs) {
    const obsArray = JSON.parse(obs);
    const numOfObservations = obsArray.length;
    deleteObservationsList(userSession)
      .then(() => {
        deleteObservationFiles(userSession, numOfObservations);
        dispatch(resetObservations());
        return 200;
      })
      .catch(err => console.error(err));
  }
};

export const fetchObservations = userSession => async dispatch => {
  return userSession.getFile('tempUnit').then(async tempUnit => {
    if (tempUnit) dispatch({ type: FETCH_TEMP_UNIT, tempUnit });
    const observations = await getObservations(userSession);
    const JSONobservations = JSON.parse(observations).map(obs => {
      if (tempUnit === 'celsius') {
        return {
          ...obs,
          physical: {
            ...obs.physical,
            feverSeverity: convertTempUnit(tempUnit, obs.physical.feverSeverity),
          },
        };
      }
      return obs;
    });
    if (JSONobservations) {
      dispatch({
        type: FETCH_OBSERVATIONS,
        observations: JSONobservations,
      });
    }
  });
};
