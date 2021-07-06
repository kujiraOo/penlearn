import React from 'react';
import { render, screen } from '@testing-library/react';

import FlexContainer from './FlexContainer';

describe('FlexContainer', () => {
  it('renders children', () => {
    render(
      (
        <FlexContainer>
          <div>
            Some content
          </div>
        </FlexContainer>
      ),
    );

    const contentElement = screen.getByText('Some content');

    expect(contentElement).toBeInTheDocument();
  });
});
