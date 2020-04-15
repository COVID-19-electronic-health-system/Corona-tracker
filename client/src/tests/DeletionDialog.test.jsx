import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import configureMockStore from 'redux-mock-store';
import DeletionDialog from '../components/DeletionDialog';

const mockStore = configureMockStore();

describe('DeletionDialog', () => {
  it('should render a DeletionDialog component ', () => {
    const store = mockStore();
    window.HTMLCanvasElement.prototype.getContext = () => {};

    const wrapper = mount(
      <Provider store={store}>
        <BrowserRouter>
          <DeletionDialog
            setShowDeletionDialog={() => {
              return 'test';
            }}
          />
        </BrowserRouter>
      </Provider>
    );
    expect(wrapper.find('DeletionDialog')).toMatchSnapshot();
  });
});
