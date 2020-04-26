import {
  SET_DEMOGRAPHICS_COMORBIDITIES,
  RESET_DEMOGRAPHICS_COMORBIDITIES,
  FETCH_DEMOGRAPHICS_COMORBIDITIES,
  DISCLAIMER_ANSWER,
  RESET_ANSWER,
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
  disclaimerAnswer: false,
  showOnboard: false,
};

const onboardingReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DEMOGRAPHICS_COMORBIDITIES:
      return {
        ...state,
        demographicsComorbidities: action.formData,
        showOnboard: !action.formData.age,
      };
    case FETCH_DEMOGRAPHICS_COMORBIDITIES:
      if (!action.payload)
        return {
          ...state,
          showOnboard: true,
        };
      return {
        ...state,
        demographicsComorbidities: action.payload,
        showOnboard: !action.payload.age,
      };
    case RESET_DEMOGRAPHICS_COMORBIDITIES:
      return {
        ...state,
        demographicsComorbidities: {},
      };
    case DISCLAIMER_ANSWER:
      return {
        ...state,
        disclaimerAnswer: action.answer,
      };
    case RESET_ANSWER:
      return {
        ...state,
        disclaimerAnswer: false,
      };
    default:
      return state;
  }
};

export default onboardingReducer;
