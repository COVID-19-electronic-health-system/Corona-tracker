import React from 'react';
import { render } from '@testing-library/react';
import TempChart from '../components/ChartJs';

test('renders sub component TempChart', () => {
  render(<TempChart />);
});
