import React from 'react';
import { render, screen } from '@testing-library/react';

import Button from './Button';

describe('Button', () => {
  it('renders button with text', () => {
    render(
      (
        <Button>
          Click me!
        </Button>
      ),
    );

    const buttonElement = screen.getByRole('button');

    expect(buttonElement).toHaveTextContent('Click me!');
  });
});
