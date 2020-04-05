import React from 'react';
import renderer from 'react-test-renderer';
import LogHealthSlider from '../components/LogHealthSlider';

jest.mock('react-router-dom', () => ({
  useHistory: () => ({
    push: jest.fn(),
  }),
}));

describe('LogHealthSlider', () => {
  it('should render correctly', () => {
    const tree = renderer.create(<LogHealthSlider />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
