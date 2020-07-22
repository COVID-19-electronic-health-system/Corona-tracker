import React from 'react';
import { mount } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import More from '../components/layout/More';

const mockStore = configureMockStore();

test('renders More component', () => {
  const onboardReducerState = {
    phoneNumber: {
      subscribedNumber: null,
      error: {},
      success: '',
    },
  };
  const navToggleState = {
    moreToggle: false,
  };
  const store = mockStore({
    onboardingReducer: onboardReducerState,
    navToggle: navToggleState,
  });
  window.HTMLCanvasElement.prototype.getContext = () => {};
  const wrapper = mount(
    <BrowserRouter>
      <Provider store={store}>
        <More />
      </Provider>
    </BrowserRouter>
  );
  expect(wrapper.find('More')).toMatchSnapshot();
});

// TODO test button click subscribes someone (E2E, ensure alert pops up)
// TODO test about, settings, log out works
