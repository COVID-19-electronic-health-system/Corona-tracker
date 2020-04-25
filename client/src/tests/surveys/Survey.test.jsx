import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import Survey from '../../components/survey/Survey';

const mockStore = configureMockStore();

const mockSurveyReducerState = {
  survey: {
    date: 0,
    physical: {},
    nonPhysical: {},
  },
  completedSteps: {},
  surveyPage: 1,
};

describe('Survey', () => {
  it('should render a Survey component ', () => {
    const store = mockStore({
      surveyReducer: mockSurveyReducerState,
    });
    window.HTMLCanvasElement.prototype.getContext = () => {};

    const wrapper = mount(
      <Provider store={store}>
        <Survey />
      </Provider>
    );
    expect(wrapper.find('Survey')).toMatchSnapshot();
  });
});

// TODO test routing between components, invalid number gets into state, etc
