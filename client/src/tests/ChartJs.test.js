import React from 'react';
import { render } from '@testing-library/react';
import ChartJs from '../components/ChartJs';

test('renders sub component TempChart', () => {
  render(<ChartJs />);
});
