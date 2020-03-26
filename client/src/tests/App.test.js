import React from 'react';
import { render } from '@testing-library/react';
import App from '../components/App';
import Map from '../components/Map';

jest.mock('mapbox-gl/dist/mapbox-gl', () => ({
  Map: () => ({})
}));

test('renders App', () => {
  // render(<App />); TODO update this later
});

