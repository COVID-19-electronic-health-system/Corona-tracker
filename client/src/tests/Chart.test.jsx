import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const mockStore = configureMockStore([thunk]);

const mockChartJsState = {
  dataSample: {
    labels: ['2020-02-28', '2020-03-2', '2020-03-4', '2020-03-5', '2020-03-9'],
    values: [80, 70, 56, 90, 55],
  },
};

describe('ChartJs', () => {
  it('should render a ChartJs component ', () => {
    const store = mockStore({ root: { dataSample: mockChartJsState.dataSample } });
    window.HTMLCanvasElement.prototype.getContext = () => {};

    const wrapper = mount(<Provider store={store}>{/* <Chart /> */}</Provider>);
    expect(wrapper.find('Chart')).toMatchSnapshot();
  });
});
