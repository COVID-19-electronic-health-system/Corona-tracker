import expect from 'expect';
import reducer from '../../../redux/reducers/observations';
import { NUM_OBSERVATIONS } from '../../../redux/actions/observations';

describe('obervations reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({ numObservations: 0 });
  });

  it('should handle NUM_OBSERVATIONS', () => {
    const numObs = {
      type: NUM_OBSERVATIONS,
      numObservations: 2,
    };
    expect(reducer({}, numObs)).toEqual({ numObservations: 2 });
  });
});
