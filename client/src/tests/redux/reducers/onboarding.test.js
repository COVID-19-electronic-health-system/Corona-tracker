import expect from 'expect';
import { onboardingReducer } from '../../../redux/reducers/onboarding';
import { SET_DEMOGRAPHICS_COMORBIDITIES } from '../../../redux/actions/onboarding';

describe('onboarding reducer', () => {
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
    showOnboard: false,
  };

  it('should return the initial state', () => {
    expect(onboardingReducer(initialState, {})).toEqual(initialState);
  });

  it('should handle SET_DEMOGRAPHICS_COMORBIDITIES', () => {
    const formData = {
      age: '22',
      gender: 'male',
      city: 'long beach',
      state: 'NY',
      zip: '11561',
      isSmoker: 'yes',
      isObese: 'no',
      isAsthmatic: 'no',
    };
    const setDemographicsComorbidities = {
      type: SET_DEMOGRAPHICS_COMORBIDITIES,
      formData,
    };
    expect(onboardingReducer(initialState, setDemographicsComorbidities)).toEqual({
      demographicsComorbidities: formData,
      showOnboard: false,
    });
  });
});
