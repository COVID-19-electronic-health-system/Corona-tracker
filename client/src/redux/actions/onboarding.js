/* eslint-disable no-console */

export const SET_DEMOGRAPHICS_COMORBIDITIES = 'SET_DEMOGRAPHICS_COMORBIDITIES';

export function setDemographicsComorbidities(formData) {
  return {
    type: SET_DEMOGRAPHICS_COMORBIDITIES,
    formData,
  };
}

export const fetchDemographicsComorbidities = userSession => async dispatch => {
  const data = await userSession.getFile(`demographics-comorbidities.json`);
  if (data) dispatch(setDemographicsComorbidities(JSON.parse(data)));
};

export const setDemographicsComorbiditiesThunk = (formData, userSession) => async dispatch => {
  await userSession
    .putFile(`demographics-comorbidities.json`, JSON.stringify(formData))
    .then(() => 200)
    .catch(err => console.error(err));

  dispatch(setDemographicsComorbidities(formData));
};
