import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import SurveyPage2 from '../../components/survey/SurveyPage2';

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

describe('SurveyPage2', () => {
  it('should render a SurveyPage2 component ', () => {
    const store = mockStore({
      surveyReducer: mockSurveyReducerState,
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
