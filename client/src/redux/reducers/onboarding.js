import {
  SET_DEMOGRAPHICS_COMORBIDITIES,
  RESET_DEMOGRAPHICS_COMORBIDITIES,
  FETCH_DEMOGRAPHICS_COMORBIDITIES,
} from '../actions/onboarding';

const initialState = {
  demographicsComorbidities: {
    age: '',
    gender: '',
    city: '',
    state: '',
    zip: '',
    isSmoker: '',
    isObese: '',
    isAsthmatic: '',
  },
};

const onboardingReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DEMOGRAPHICS_COMORBIDITIES:
      return {
        ...state,
        demographicsComorbidities: action.formData,
      };
    case FETCH_DEMOGRAPHICS_COMORBIDITIES:
      return {
        ...state,
        demographicsComorbidities: action.payload,
      };
    case RESET_DEMOGRAPHICS_COMORBIDITIES:
      return {
        ...state,
        demographicsComorbidities: {},
      };
    default:
      return state;
  }
};

export default onboardingReducer;
