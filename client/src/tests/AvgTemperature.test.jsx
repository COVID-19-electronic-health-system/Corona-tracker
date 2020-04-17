import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import AvgTemperature from '../components/AvgTemperature';

const mockStore = configureMockStore([thunk]);
const mockObservationsReducerState = {
  observations: [
    {
      date: 1586830448900,
      physical: { feverSeverity: 98.6 },
    },
    {
      date: 1586910193682,
      physical: { feverSeverity: 100.3 },
    },
    {
      date: 1586966651099,
      physical: { feverSeverity: 99 },
    },
  ],
};

describe('Average Temperature', () => {
  it('renders AvgTemperature component', () => {
    const store = mockStore({
      observationsReducer: mockObservationsReducerState,
    });

    const wrapper = shallow(
      <Provider store={store}>
        <AvgTemperature />
      </Provider>
    );
    expect(wrapper.find('AvgTemperature')).toMatchSnapshot();
  });
});
