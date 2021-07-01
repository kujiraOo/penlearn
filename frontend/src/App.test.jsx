import React from 'react';

import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Random Wars heading', () => {
  render(<App />);
  const heading = screen.getByText('Random Wars');
  expect(heading).toBeInTheDocument();
});
