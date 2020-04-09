export const SAVING = 'SAVING';
export const IDLE = 'IDLE';
export const LOADING = 'LOADING';
export const OBSERVATIONS_LOADED = 'OBSERVATIONS_LOADED';
export const NUM_OBSERVATIONS = 'NUM_OBSERVATIONS';
export const SET_OBSERVATIONS = 'SET_OBSERVATIONS';

export function setNumObservations(numObservations) {
  return {
    type: NUM_OBSERVATIONS,
    numObservations,
  };
}

export function setObservations(observations) {
  return {
    type: SET_OBSERVATIONS,
    observations,
  };
}

export const addObservation = (observation, observationNumber) => (dispatch, getState) => {
  const { observations } = getState().observationsReducer;
  dispatch(setObservations(observations.concat(observation)));
  dispatch(setNumObservations(observationNumber));
};

export const fetchObservations = userSession => async dispatch => {
  const fileNames = [];
  const observations = [];
  let numObservations = 0;

  // Get the observation file names
  await userSession.listFiles(fileName => {
    if (fileName.includes('observation/')) {
      fileNames.push(fileName);
    }
    return true;
  });

  // Prepare to get each observation file and determine the number of observations
  const getFilePromises = fileNames.map(fileName => {
    const observationNum = parseInt(fileName.replace(/^\D+/g, ''), 10);
    numObservations = observationNum;
    return userSession.getFile(fileName);
  });

  dispatch(setNumObservations(numObservations));

  // Convert the observations to JSON objects
  (await Promise.all(getFilePromises)).forEach(observationString => {
    const observation = JSON.parse(observationString);
    observations.push(observation);
  });

  dispatch(setObservations(observations));
};
