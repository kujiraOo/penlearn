import React from 'react';

import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('renders app heading', () => {
    render(<App />);

    const heading = screen.getByText('Random Wars');

    expect(heading).toBeInTheDocument();
  });
});
