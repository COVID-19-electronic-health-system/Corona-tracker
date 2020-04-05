import expect from 'expect';
import reducer from '../../../redux/reducers/observations';
import { NUM_OBSERVATIONS, SET_OBSERVATIONS } from '../../../redux/actions/observations';
import Observation from '../../../models/observation';

describe('obervations reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({ numObservations: 0, observations: [] });
  });

  it('should handle NUM_OBSERVATIONS', () => {
    const numObs = {
      type: NUM_OBSERVATIONS,
      numObservations: 2,
    };
    expect(reducer({}, numObs)).toEqual({ numObservations: 2 });
  });

  it('should handle SET_OBSERVATIONS', () => {
    const observation = new Observation().attrs;
    const setObs = {
      type: SET_OBSERVATIONS,
      observations: [observation],
    };
    expect(reducer({}, setObs)).toEqual({ observations: [observation] });
  });
});
