import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import SurveyPage1 from '../../components/survey/SurveyPage1';

const mockStore = configureMockStore();

describe('SurveyPage1', () => {
  it('should render a SurveyPage1 component ', () => {
    const store = mockStore();
    window.HTMLCanvasElement.prototype.getContext = () => {};

    const wrapper = mount(
      <Provider store={store}>
        <SurveyPage1 />
      </Provider>
    );
    expect(wrapper.find('SurveyPage1')).toMatchSnapshot();
  });
});

// TODO broken Redux call
// TODO make sure popup always pops up
