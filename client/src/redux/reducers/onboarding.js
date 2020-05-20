import {
  SET_DEMOGRAPHICS_COMORBIDITIES,
  RESET_DEMOGRAPHICS_COMORBIDITIES,
  FETCH_DEMOGRAPHICS_COMORBIDITIES,
  DISCLAIMER_ANSWER,
  RESET_ANSWER,
  FETCH_SUBSCRIBED_NUMBER,
  SET_SUBSCRIBED_NUMBER,
  UNSUBSCRIBE,
  SUBSCRIBE_ERROR,
  CLEAR_RESPONSE,
  SET_TEMP_UNIT,
  FETCH_TEMP_UNIT,
} from '../actions/onboarding';

export const initialState = {
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
  phoneNumber: { subscribedNumber: null, error: {}, success: '' },
  showOnboard: false,
  tempUnit: 'fahrenheit',
};

export const onboardingReducer = (state = initialState, action) => {
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
    case FETCH_SUBSCRIBED_NUMBER:
      return {
        ...state,
        phoneNumber: {
          ...state.phoneNumber,
          subscribedNumber: action.phoneNumber,
        },
      };
    case SET_SUBSCRIBED_NUMBER:
      return {
        ...state,
        phoneNumber: {
          ...state.phoneNumber,
          subscribedNumber: action.phoneNumber,
          success: 'subscribed',
          error: {},
        },
      };
    case UNSUBSCRIBE:
      return {
        ...state,
        phoneNumber: {
          ...state.phoneNumber,
          subscribedNumber: null,
          success: 'unsubscribed',
          error: {},
        },
      };
    case SUBSCRIBE_ERROR:
      return {
        ...state,
        phoneNumber: {
          ...state.phoneNumber,
          error: action.error,
        },
      };
    case CLEAR_RESPONSE:
      return {
        ...state,
        phoneNumber: {
          ...state.phoneNumber,
          error: {},
          success: '',
        },
      };
    case SET_TEMP_UNIT:
      return {
        ...state,
        tempUnit: action.nextUnit,
      };
    case FETCH_TEMP_UNIT:
      return {
        ...state,
        tempUnit: action.tempUnit,
      };
    default:
      return state;
  }
};
