import React from 'react';
import {
  render, screen, getAllByRole, fireEvent, act,
} from '@testing-library/react';

import Main from './Main';
import * as client from '../utils/client';

jest.mock('../utils/client');

describe('Main', () => {
  beforeEach(async () => {
    client.getRandomNumbers.mockResolvedValue([
      { id: 1, value: 10 },
      { id: 2, value: 12 },
    ]);

    await act(async () => {
      await render(<Main />);
    });
  });

  describe('on mount', () => {
    it('fetches and renders existing random numbers', async () => {
      const rows = screen.getAllByRole('row');
      const cells = getAllByRole(rows[1], 'cell');

      expect(cells[0]).toHaveTextContent('1');
      expect(cells[1]).toHaveTextContent('10');
    });
  });

  describe('on random number button click', () => {
    beforeEach(async () => {
      client.addRandomNumber.mockResolvedValue({ id: 3, value: 32 });

      const button = screen.getByRole('button');

      await act(async () => fireEvent.click(button));
    });

    it('makes API call to create a new random number', () => {
      expect(client.addRandomNumber).toBeCalledTimes(1);
    });

    it('appends the newly created random number to the table', () => {
      const appendedRow = screen.getAllByRole('row')[3];
      const cells = getAllByRole(appendedRow, 'cell');

      expect(cells[0]).toHaveTextContent('3');
      expect(cells[1]).toHaveTextContent('32');
    });
  });
});
