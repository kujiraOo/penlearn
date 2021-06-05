import { getRandomNumbers } from './client';

describe('client', () => {
  beforeAll(() => {
    global.fetch = jest.fn();
  });

  describe('getRandomNumbers', () => {
    const successResponse = [
      { id: 1, value: 60 },
      { id: 2, value: 70 },
      { id: 3, value: 80 },
    ];

    const successResolvedValue = {
      ok: true,
      json: async () => successResponse,
    };

    const setUpMockFetch = (resolvedValue) => global.fetch.mockResolvedValue(resolvedValue);

    it('calls fetch with correct parameters', async () => {
      setUpMockFetch(successResolvedValue);

      await getRandomNumbers();

      expect(global.fetch).toHaveBeenCalledWith(
        '/api/random-numbers',
        { method: 'GET', headers: { 'Content-Type': 'application/json' } },
      );
    });

    it('returns list of random number entries when request succeeds', async () => {
      setUpMockFetch(successResolvedValue);

      const result = await getRandomNumbers();

      expect(result).toMatchObject(successResponse);
    });

    it('returns null when request fails', async () => {
      setUpMockFetch({
        ok: false,
        status: 500,
        statusText: 'Mock fail error',
      });

      const result = await getRandomNumbers();

      expect(result).toBe(null);
    });
  });
});
