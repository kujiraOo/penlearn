const randomNumber = require('../db/random-number');
const { resetDb } = require('../test/db');
const setUpSupertest = require('../test/set-up-supertest');

describe('/random-numbers', () => {
  const { request, tearDown, dbPool } = setUpSupertest();

  beforeAll(async (done) => {
    await resetDb(dbPool);

    done();
  });

  afterAll(async (done) => {
    await resetDb(dbPool);
    tearDown();

    done();
  });

  describe('GET /random-numbers', () => {
    afterAll(async (done) => {
      await resetDb(dbPool);

      done();
    });

    test('returns all entries from random_numbers table', async (done) => {
      const { rows: [randomNumber1] } = await dbPool.query(
        randomNumber.insert({
          min: 10,
          max: 20,
          value: 12,
        }),
      );

      const { rows: [randomNumber2] } = await dbPool.query(
        randomNumber.insert({
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

      done();
    });
  });
});
