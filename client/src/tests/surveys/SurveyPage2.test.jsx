import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import SurveyPage2 from 'components/survey/SurveyPage2';

const mockStore = configureMockStore([thunk]);

const mockSurveyReducerState = {
  survey: {
    date: 0,
    physical: {},
    nonPhysical: {},
  },
  completedSteps: {},
  surveyPage: 2,
};

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

describe('SurveyPage2', () => {
  it('should render a SurveyPage2 component ', () => {
    const store = mockStore({
      surveyReducer: mockSurveyReducerState,
      observationsReducer: mockObservationsReducerState,
      onboardingReducer: mockOnboardReducerState,
    });
    window.HTMLCanvasElement.prototype.getContext = () => {};

    const wrapper = mount(
      <Provider store={store}>
        <SurveyPage2 />
      </Provider>
    );
    expect(wrapper.find('SurveyPage2')).toMatchSnapshot();
  });
});

// TODO broken Redux call
// TODO make sure popup always pops up
