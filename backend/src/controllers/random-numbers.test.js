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
      const { body: randomNumber } = await request
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

  describe('PUT /random-numbers/:id', () => {
    afterAll(() => resetDb(dbPool));

    test('updates an existing random-number entry', async () => {
      const { rows: [randomNumberBefore] } = await dbPool.query(
        randomNumbers.insert({
          min: 10,
          max: 20,
          value: 12,
        }),
      );
      const { body: randomNumberAfter } = await request
        .put(`/api/random-numbers/${randomNumberBefore.id}`)
        .send({ min: 66, max: 33, value: 15 })
        .expect(200);

      expect(Number.isInteger(randomNumberAfter.id)).toBe(true);
      expect(randomNumberAfter.min).toBe(66);
      expect(randomNumberAfter.max).toBe(33);
      expect(randomNumberAfter.value).toBe(15);
      expect(typeof randomNumberAfter.created_at).toBe('string');
      expect(randomNumberAfter.updated_at).not.toBe(randomNumberBefore.updated_at);
    });

    test('requires min value in request body', async () => {
      const response = await request
        .put('/api/random-numbers/1')
        .send({ max: 33, value: 15 })
        .expect(400);

      expect(response.text).toBe('"min" is required');
    });

    test('requires min value to be a number', async () => {
      const response = await request
        .put('/api/random-numbers/1')
        .send({ min: 'putin', max: 33, value: 15 })
        .expect(400);

      expect(response.text).toBe('"min" must be a number');
    });

    test('requires max value in request body', async () => {
      const response = await request
        .put('/api/random-numbers/1')
        .send({ min: 66, value: 15 })
        .expect(400);

      expect(response.text).toBe('"max" is required');
    });

    test('requires max value to be a number', async () => {
      const response = await request
        .put('/api/random-numbers/1')
        .send({ min: 66, max: 'putin', value: 15 })
        .expect(400);

      expect(response.text).toBe('"max" must be a number');
    });

    test('requires value in request body', async () => {
      const response = await request
        .put('/api/random-numbers/1')
        .send({ min: 66, max: 33 })
        .expect(400);

      expect(response.text).toBe('"value" is required');
    });

    test('requires value to be a number', async () => {
      const response = await request
        .put('/api/random-numbers/1')
        .send({ min: 66, max: 33, value: 'putin' })
        .expect(400);

      expect(response.text).toBe('"value" must be a number');
    });

    test('requires id to be a number', async () => {
      const response = await request
        .put('/api/random-numbers/putin')
        .send({ min: 66, max: 33, value: 15 })
        .expect(400);

      expect(response.text).toBe('"id" must be a number');
    });

    test('wrong id', async () => {
      const response = await request
        .put('/api/random-numbers/9999')
        .send({ min: 66, max: 33, value: 15 })
        .expect(404);

      expect(response.text).toBe('Not found');
    });
  });

  describe('GET /random-numbers/:id', () => {
    afterAll(() => resetDb(dbPool));

    test('returns an existing entry', async () => {
      const data = {
        min: 1000,
        max: 2000,
        value: 1111,
      };
      const { rows: [randomNumber] } = await dbPool.query(
        randomNumbers.insert(data),
      );
      const { body } = await request
        .get(`/api/random-numbers/${randomNumber.id}`)
        .expect(200);

      expect(body).toMatchObject(
        {
          id: randomNumber.id,
          min: 1000,
          max: 2000,
          value: randomNumber.value,
        },
      );
    });

    test('requires id to be a number', async () => {
      const response = await request
        .get('/api/random-numbers/putin')
        .expect(400);

      expect(response.text).toBe('"id" must be a number');
    });

    test('returns 404 if entry with specified id not found', async () => {
      const response = await request
        .get('/api/random-numbers/9999')
        .expect(404);

      expect(response.text).toBe('Not found');
    });
  });

  describe('DELETE /random-numbers/:id', () => {
    let randomNumber;
    beforeAll(async () => {
      const data = {
        min: 1000,
        max: 2000,
        value: 1111,
      };
      const { rows } = await dbPool.query(
        randomNumbers.insert(data),
      );
      [randomNumber] = rows;
    });
    afterAll(() => resetDb(dbPool));

    test('returns an id and deleted status', async () => {
      await request
        .delete(`/api/random-numbers/${randomNumber.id}`)
        .expect(204);
    });

    test('requires id to be a number', async () => {
      const response = await request
        .delete('/api/random-numbers/putin')
        .expect(400);

      expect(response.text).toBe('"id" must be a number');
    });

    test('returns 404 if entry with specified id not found', async () => {
      const response = await request
        .delete('/api/random-numbers/9999')
        .expect(404);

      expect(response.text).toBe('Not found');
    });

    test('returns 404 if entry with specified id already deleted', async () => {
      const response = await request
        .delete('/api/random-numbers/1')
        .expect(404);

      expect(response.text).toBe('Not found');
    });
  });
});
