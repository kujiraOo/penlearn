import React from 'react';
import { render, screen, getAllByRole } from '@testing-library/react';

import Table from './Table';

describe('Table', () => {
  beforeEach(() => {
    render(
      (
        <Table
          idProp="id"
          data={[
            { id: 1, name: 'Bob', number: '112' },
            { id: 2, name: 'John', number: '911' },
            { id: 3, name: 'Steve', number: '999' },
          ]}
        />
      ),
    );
  });

  it('renders correct headers', () => {
    const columnHeaders = screen.getAllByRole('columnheader');

    expect(columnHeaders[0]).toHaveTextContent('id');
    expect(columnHeaders[1]).toHaveTextContent('name');
    expect(columnHeaders[2]).toHaveTextContent('number');
  });

  it('renders rows in correct order', () => {
    const columnHeaders = screen.getAllByRole('row');

    expect(columnHeaders[0]).toHaveTextContent('id');
    expect(columnHeaders[1]).toHaveTextContent('1');
    expect(columnHeaders[2]).toHaveTextContent('2');
    expect(columnHeaders[3]).toHaveTextContent('3');
  });

  it('render correct row cells', () => {
    const secondRow = screen.getAllByRole('row')[2];
    const cells = getAllByRole(secondRow, 'cell');

    expect(cells[0]).toHaveTextContent(2);
    expect(cells[1]).toHaveTextContent('John');
    expect(cells[2]).toHaveTextContent('911');
  });
});
