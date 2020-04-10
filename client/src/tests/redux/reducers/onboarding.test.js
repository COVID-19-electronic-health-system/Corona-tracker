import expect from 'expect';
import reducer from '../../../redux/reducers/onboarding';
import { SET_DEMOGRAPHICS_COMORBIDITIES } from '../../../redux/actions/onboarding';

describe('onboarding reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      demographicsComorbidities: {},
    });
  });

  it('should handle SET_DEMOGRAPHICS_COMORBIDITIES', () => {
    const formData = {};
    const setDemographicsComorbidities = {
      type: SET_DEMOGRAPHICS_COMORBIDITIES,
      formData: [formData],
    };
    expect(reducer({}, setDemographicsComorbidities)).toEqual({ demographicsComorbidities: [formData] });
  });
});
