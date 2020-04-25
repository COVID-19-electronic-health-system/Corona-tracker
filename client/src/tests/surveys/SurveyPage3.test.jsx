import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { BrowserRouter } from 'react-router-dom';
import SurveyPage3 from '../../components/survey/SurveyPage3';

const mockStore = configureMockStore([thunk]);

const mockSurveyReducerState = {
  survey: {
    date: 0,
    physical: {},
    nonPhysical: {},
  },
  scompletedSteps: {},
  surveyPage: 3,
};

const mockObservationReducerState = {
  numObservations: 0,
};

describe('SurveyPage3', () => {
  it('should render a SurveyPage3 component ', () => {
    const store = mockStore({
      surveyReducer: mockSurveyReducerState,
      observationsReducer: mockObservationReducerState,
    });
    window.HTMLCanvasElement.prototype.getContext = () => {};

    const wrapper = mount(
      <BrowserRouter>
        <Provider store={store}>
          <SurveyPage3 />
        </Provider>
      </BrowserRouter>
    );
    expect(wrapper.find('SurveyPage3')).toMatchSnapshot();
  });
});

// TODO broken Redux call
// TODO make sure popup always pops up
