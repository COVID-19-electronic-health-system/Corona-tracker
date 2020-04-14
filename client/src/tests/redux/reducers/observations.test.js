import expect from 'expect';
import reducer from '../../../redux/reducers/observations';
import { FETCH_OBSERVATIONS, ADD_OBSERVATION } from '../../../redux/actions/observations';
import Observation from '../../../models/observation';

describe('obervations reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      selectedObservation: null,
      observations: [],
    });
  });

  it('should handle FETCH_OBSERVATIONS', () => {
    const observation = new Observation().attrs;
    const setObs = {
      type: FETCH_OBSERVATIONS,
      observations: [observation],
    };
    expect(reducer({}, setObs)).toEqual({ observations: [observation] });
  });
});

it('should handle ADD_OBSERVATIONS', () => {
  const observation = new Observation().attrs;
  const oldObs = new Observation().attrs;
  const addObs = {
    type: ADD_OBSERVATION,
    observations: [observation],
  };
  expect(reducer({ observations: [oldObs] }, addObs)).toEqual({ observations: [oldObs, observation] });
});
