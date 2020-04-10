import React from 'react';
import Calendar from 'react-calendar/dist/umd/Calendar';
import { render } from '@testing-library/react';

// describe('Calendar', () => {
//   it('should render a Calendar component', () => {
//     return <Calendar />;
//   });
// });

test('renders a Calendar component', () => {
  render(<Calendar />);
});
