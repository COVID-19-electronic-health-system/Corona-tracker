import { SET_DEMOGRAPHICS_COMORBIDITIES } from '../actions/onboarding';

const initialState = {
  demographicsComorbidities: {},
};

const onboardingReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DEMOGRAPHICS_COMORBIDITIES:
      return {
        ...state,
        demographicsComorbidities: action.formData,
      };
    default:
      return state;
  }
};

export default onboardingReducer;
