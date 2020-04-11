const postObservation = async (userSession, observation) => {
    const result = await userSession.putFile(`observations.json`, JSON.stringify(observation))
    return result
}

const getObservations = async (userSession) => {
    // await userSession.deleteFile('observations.json')
    const observations = await userSession.getFile('observations.json')
    return observations
}

module.exports = {
    postObservation,
    getObservations
}