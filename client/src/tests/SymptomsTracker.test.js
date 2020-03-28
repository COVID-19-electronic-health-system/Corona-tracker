import React from 'react';
import { render } from '@testing-library/react';
import SymptomsTracker from '../components/survey-view/SymptomsTracker';

test('renders Slider component', () => {
    render(<SymptomsTracker />);
});
