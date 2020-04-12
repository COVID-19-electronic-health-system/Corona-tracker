import { getObservations, postObservationsList, postSingleObservation } from '../../utils/blockstackHelpers';

export const ADD_OBSERVATION = 'ADD_OBSERVATION';
export const FETCH_OBSERVATIONS = 'FETCH_OBSERVATIONS';

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
      dispatch({ type: ADD_OBSERVATION, payload: observation });
    }
  });
};

export const fetchObservations = userSession => async dispatch => {
  const observations = await getObservations(userSession);
  const JSONobservations = JSON.parse(observations);
  if (JSONobservations) {
    dispatch({ type: FETCH_OBSERVATIONS, observations: JSONobservations });
  }
};
