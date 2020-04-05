import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import More from '../components/More';

test('renders More component', () => {
  render(
    <BrowserRouter>
      <More />
    </BrowserRouter>
  );
});

// TODO test button click subscribes someone (E2E, ensure alert pops up)
// TODO test about, settings, log out works
