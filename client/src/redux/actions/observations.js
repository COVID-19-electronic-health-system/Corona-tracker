/* eslint-disable no-console */

import {
  getObservations,
  postObservationsList,
  postSingleObservation,
  deleteObservationsList,
  deleteObservationFiles,
} from '../../utils/blockstackHelpers';

export const ADD_OBSERVATION = 'ADD_OBSERVATION';
export const DELETE_OBSERVATIONS = 'DELETE_OBSERVATIONS';
export const FETCH_OBSERVATIONS = 'FETCH_OBSERVATIONS';

export function resetObservations() {
  return {
    type: DELETE_OBSERVATIONS,
  };
}

export function addObservationToStore(observation) {
  return {
    type: ADD_OBSERVATION,
    payload: observation,
  };
}

export const addObservation = (userSession, observation) => async dispatch => {
  const obs = await getObservations(userSession);
  let obsArray;
  let fileNumber = 1;
  if (obs) {
    const currentArray = JSON.parse(obs);
    fileNumber = currentArray.length + 1;
    obsArray = [...currentArray, observation];
  } else {
    obsArray = [observation];
  }
  postObservationsList(userSession, obsArray, fileNumber).then(didPost => {
    if (didPost) {
      postSingleObservation(userSession, observation, fileNumber);
      dispatch(addObservationToStore(observation));
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
  const observations = await getObservations(userSession);
  const JSONobservations = JSON.parse(observations);
  if (JSONobservations) {
    dispatch({ type: FETCH_OBSERVATIONS, observations: JSONobservations });
  }
};
