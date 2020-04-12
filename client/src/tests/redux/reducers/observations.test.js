import expect from 'expect';
import reducer from '../../../redux/reducers/observations';
import { FETCH_OBSERVATIONS } from '../../../redux/actions/observations';
import Observation from '../../../models/observation';

describe('obervations reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      selectedObservation: null,
      observations: [],
    });
  });

  // it('should handle NUM_OBSERVATIONS', () => {
  //   const numObs = {
  //     type: NUM_OBSERVATIONS,
  //     numObservations: 2,
  //   };
  //   expect(reducer({}, numObs)).toEqual({ numObservations: 2 });
  // });

  it('should handle FETCH_OBSERVATIONS', () => {
    const observation = new Observation().attrs;
    const setObs = {
      type: FETCH_OBSERVATIONS,
      observations: [observation],
    };
    expect(reducer({}, setObs)).toEqual({ observations: [observation] });
  });
});
