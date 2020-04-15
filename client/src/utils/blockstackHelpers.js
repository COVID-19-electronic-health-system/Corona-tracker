export const postObservationsList = async (userSession, observation) => {
  const result = await userSession.putFile(`observations.json`, JSON.stringify(observation));
  return result;
};

export const postSingleObservation = async (userSession, observation, observationNumber) => {
  const fileNumber = `${observationNumber}`.padStart(7, '0');
  userSession.putFile(`observation/${fileNumber}.json`, JSON.stringify(observation));
};

export const deleteAllObservations = async userSession => {
  await userSession
    .deleteFile(`observations.json`)
    .then(() => 200)
    .catch(err => console.error(err));
};

export const deleteSingleObservations = async (userSession, numOfObservations) => {
  for (let num = 1; num <= numOfObservations; num += 1) {
    const fileNumber = `${num}`.padStart(7, '0');
    userSession
      .deleteFile(`observation/${fileNumber}.json`)
      .then(() => 200)
      .catch(err => console.error(err));
  }
};

export const getObservations = async userSession => {
  const observations = await userSession.getFile('observations.json');
  return observations;
};
