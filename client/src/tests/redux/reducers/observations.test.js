import expect from 'expect';
import reducer from '../../../redux/reducers/observations';
import { OBSERVATIONS_LOADED } from '../../../redux/actions/observations';
import Observation from '../../../models/observation';

describe('obervations reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toHaveLength(5);
  });

  it('should handle OBSERVATIONS_LOADED', () => {
    const loadedAction = {
      type: OBSERVATIONS_LOADED,
      observations: [new Observation({ physical: { temperature: 90 } })],
    };
    // it's empty on purpose because it's just starting to fetch posts
    expect(reducer({}, loadedAction)).toEqual(loadedAction.observations);
  });
});
