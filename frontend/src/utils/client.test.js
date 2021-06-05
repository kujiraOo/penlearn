import { getRandomNumbers } from './client';

describe('client', () => {
  beforeEach(() => {
    global.fetch = jest.fn().mockReturnValue({});
  });

  describe('getRandomNumbers', () => {
    it('should call fetch with correct url', async () => {
      await getRandomNumbers();

      expect(global.fetch).toHaveBeenCalledWith(
        '/api/random-numbers',
        { method: 'GET', headers: { 'Content-Type': 'application/json' } },
      );
    });
  });
});
