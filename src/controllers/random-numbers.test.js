const randomNumbers = require('../db/random-numbers');
const { resetDb } = require('../test/db');
const setUpSupertest = require('../test/set-up-supertest');

describe('/random-numbers', () => {
  const { request, tearDown, dbPool } = setUpSupertest();

  beforeAll(() => resetDb(dbPool));

  afterAll(async () => {
    await resetDb(dbPool);

    tearDown();
  });

  describe('GET /random-numbers', () => {
    afterAll(() => resetDb(dbPool));

    test('returns all entries from random_numbers table', async () => {
      const { rows: [randomNumber1] } = await dbPool.query(
        randomNumbers.insert({
          min: 10,
          max: 20,
          value: 12,
        }),
      );

      const { rows: [randomNumber2] } = await dbPool.query(
        randomNumbers.insert({
          min: 10,
          max: 40,
          value: 20,
        }),
      );

      const { body } = await request
        .get('/api/random-numbers')
        .expect(200);

      expect(body).toMatchObject([
        {
          id: randomNumber1.id,
          value: randomNumber1.value,
        },
        {
          id: randomNumber2.id,
          value: randomNumber2.value,
        },
      ]);
    });
  });

  describe('POST /random-numbers', () => {
    afterAll(() => resetDb(dbPool));

    test('creates a new random number entry', async () => {
      const { body: { randomNumber } } = await request
        .post('/api/random-numbers')
        .send({ min: 10, max: 20 })
        .expect(200);

      expect(Number.isInteger(randomNumber.id)).toBe(true);
      expect(randomNumber.value).toBeGreaterThanOrEqual(10);
      expect(randomNumber.value).toBeLessThanOrEqual(20);
    });

    test('requires min value in request body', async () => {
      const response = await request
        .post('/api/random-numbers')
        .send({ max: 20 })
        .expect(400);

      expect(response.text).toBe('"min" is required');
    });

    test('requires min value to be a number', async () => {
      const response = await request
        .post('/api/random-numbers')
        .send({ min: 'bob', max: 20 })
        .expect(400);

      expect(response.text).toBe('"min" must be a number');
    });

    test('requires max value in request body', async () => {
      const response = await request
        .post('/api/random-numbers')
        .send({ min: 10 })
        .expect(400);

      expect(response.text).toBe('"max" is required');
    });

    test('requires max value to be a number', async () => {
      const response = await request
        .post('/api/random-numbers')
        .send({ min: 10, max: 'bob' })
        .expect(400);

      expect(response.text).toBe('"max" must be a number');
    });
  });
});