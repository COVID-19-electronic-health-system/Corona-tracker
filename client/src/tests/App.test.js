import React from 'react';
import { render } from '@testing-library/react';
import App from '../components/App';
// import mapboxgl from "mapbox-gl/dist/mapbox-gl";
require("mapbox-gl-js-mock");
import Map from '../components/Map';


if (typeof window.URL.createObjectURL === 'undefined') {
  window.URL.createObjectURL = () => {
    // Do nothing
    // Mock this function for mapbox-gl to work
  };
}

jest.mock('mapbox-gl/dist/mapbox-gl', () => ({
  App: () => ({})
}));


test('renders App', () => {
  // render(<App />); TODO update this later
});

