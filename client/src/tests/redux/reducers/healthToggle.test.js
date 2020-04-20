import expect from 'expect';
import reducer from '../../../redux/reducers/healthToggle';
import { SET_DETAIL_DATA, DELETE_DETAIL_DATA } from '../../../redux/actions/healthToggle';

describe('health toggle reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      toggleValue: 'myHealthLog',
      detailData: [],
    });
  });
});

it('should handle SET_DETAIL_DATA', () => {
  const oldData = [];
  const setData = {
    type: SET_DETAIL_DATA,
    detailData: [{ test }],
  };
  expect(reducer({ detailData: oldData }, setData)).toEqual({ detailData: [{ test }] });
});

it('should handle DELETE_DETAIL_DATA', () => {
  const oldData = [{ test }];
  const deleteObs = {
    type: DELETE_DETAIL_DATA,
  };
  expect(reducer({ detailData: oldData }, deleteObs)).toEqual({ detailData: [] });
});
