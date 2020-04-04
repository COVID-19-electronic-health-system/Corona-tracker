import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import WeeklyTracker from '../components/WeeklyTracker';

const mockStore = configureMockStore();

describe('WeeklyTracker', () => {
  it('should render a WeeklyTracker component ', () => {
    const store = mockStore();
    window.HTMLCanvasElement.prototype.getContext = () => {};

    const wrapper = mount(
      <Provider store={store}>
        <WeeklyTracker chartType="test" />
      </Provider>
    );
    expect(wrapper.find('WeeklyTracker')).toMatchSnapshot();
  });
});
