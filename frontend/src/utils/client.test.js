import { addRandomNumber, getRandomNumbers } from './client';

describe('client', () => {
  const setUpMockFetch = (resolvedValue) => global.fetch.mockResolvedValue(resolvedValue);

  const getSuccessResolvedValue = (response) => ({
    ok: true,
    json: async () => response,
  });

  beforeAll(() => {
    global.fetch = jest.fn();
  });

  describe('getRandomNumbers', () => {
    const successResponse = [
      { id: 1, value: 60 },
      { id: 2, value: 70 },
      { id: 3, value: 80 },
    ];

    const successResolvedValue = getSuccessResolvedValue(successResponse);

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

  describe('addRandomNumber', () => {
    const successResponse = { id: 1, value: 50 };
    const successResolvedValue = getSuccessResolvedValue(successResponse);

    it('calls fetch with correct parameters', async () => {
      setUpMockFetch(successResolvedValue);

      await addRandomNumber();

      expect(global.fetch).toHaveBeenCalledWith(
        '/api/random-numbers',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ min: 50, max: 100 }),
        },
      );
    });

    it('return newly created random number entry', async () => {
      setUpMockFetch(successResolvedValue);

      const result = await addRandomNumber();

      expect(result).toMatchObject({ id: 1, value: 50 });
    });

    it('returns null when request fails', async () => {
      setUpMockFetch({
        ok: false,
        status: 500,
        statusText: 'Mock fail error',
      });

      const result = await addRandomNumber();

      expect(result).toBe(null);
    });
  });
});
