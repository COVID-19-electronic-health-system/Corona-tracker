import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Chart from '../components/Chart';

const mockStore = configureMockStore([thunk]);

const mockObservationsReducerState = {
  observations: [],
};

describe('Chart', () => {
  it('should render a Chart component ', () => {
    const store = mockStore({
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
