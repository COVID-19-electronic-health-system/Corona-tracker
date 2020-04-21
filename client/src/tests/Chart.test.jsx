import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Chart from '../components/Chart';

const mockStore = configureMockStore([thunk]);

const mockChartJsState = {
  temperature: {
    labels: ['2020-02-28', '2020-03-2', '2020-03-4', '2020-03-5', '2020-03-9'],
    values: [80, 70, 56, 90, 55],
  },
};

const mockObservationsReducerState = {
  observations: [],
};

describe('Chart', () => {
  it('should render a Chart component ', () => {
    const store = mockStore({
      temperatureReducer: mockChartJsState,
      observationsReducer: mockObservationsReducerState,
    });
    window.HTMLCanvasElement.prototype.getContext = () => {};

    const wrapper = mount(
      <Provider store={store}>
        <Chart chartType="test" />
      </Provider>
    );
    expect(wrapper.find('Chart')).toMatchSnapshot();
  });
});
