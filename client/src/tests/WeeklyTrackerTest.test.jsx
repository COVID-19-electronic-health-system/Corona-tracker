import React from 'react';
import { mount } from 'enzyme';
import WeeklyTracker from '../components/WeeklyTracker';

describe('WeeklyTracker', () => {
  it('should render a WeeklyTracker component ', () => {
    window.HTMLCanvasElement.prototype.getContext = () => {};

    const wrapper = mount(<WeeklyTracker />);
    expect(wrapper.find('WeeklyTracker')).toMatchSnapshot();
  });
});
