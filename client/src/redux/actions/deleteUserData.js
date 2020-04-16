/* eslint-disable no-console */

import actions from './actions';

export const deleteUserDataThunk = userSession => async dispatch => {
  await userSession
    .listFiles(fileName => {
      if (fileName.includes('.json')) {
        userSession.deleteFile(fileName);
      }
      return true;
    })
    .then(() => 200)
    .catch(err => console.error(err));

  dispatch(actions.resetDemographicsComorbidities());
  dispatch(actions.resetDisclaimerAnswer());
  dispatch(actions.deleteDetailData());
  dispatch(actions.resetObservations());
};
