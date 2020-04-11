const postObservation = async (userSession, observation, observationNumber) => {
  const fileNumber = `${observationNumber}`.padStart(7, '0');
  userSession.putFile(`observation/${fileNumber}.json`, JSON.stringify(observation))
  const result = await userSession.putFile(`observations.json`, JSON.stringify(observation));
  return result;
};

const getObservations = async userSession => {
  //IF YOU EVER NEED TO DELETE ALL FILES, WHICH YOU MAY IF YOU MISFORMAT THEM IN DEVELOPMENT
  // userSession.listFiles(filename => {
  //   userSession.deleteFile(filename)
  //   return true
  // })
  const observations = await userSession.getFile('observations.json');
  return observations;
};

module.exports = {
  postObservation,
  getObservations,
};
