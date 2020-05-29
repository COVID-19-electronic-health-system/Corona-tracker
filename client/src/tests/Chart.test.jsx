import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Chart from 'components/showMeMore/Chart';

const mockStore = configureMockStore([thunk]);

const mockObservationsReducerState = {
  observations: [],
};
const mockOnboardReducerState = {
  demographicsComorbidities: {
    age: '',
    gender: '',
    city: '',
    state: '',
    zip: '',
    isSmoker: '',
    isObese: '',
    isAsthmatic: '',
  },
  disclaimerAnswer: false,
  phoneNumber: { subscribedNumber: null, error: {}, success: '' },
  showOnboard: false,
  tempUnit: 'fahrenheit',
};

describe('Chart', () => {
  it('should render a Chart component ', () => {
    const store = mockStore({
      observationsReducer: mockObservationsReducerState,
      onboardingReducer: mockOnboardReducerState,
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
