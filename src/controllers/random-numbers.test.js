const { setUpSuperTest } = require('../test/set-up-supertest');

describe('/random-numbers', () => {
  const { request, tearDown } = setUpSuperTest();

  afterAll(() => {
    tearDown();
  });

  test('GET /random-numbers', async (done) => {
    await request
      .get('/api/random-numbers')
      .expect(200);

    done();
  });
});
