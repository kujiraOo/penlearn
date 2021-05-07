const supertest = require('supertest');

const initApp = require('../app');
const initDbPool = require('../db/db-pool');

const setUpSuperTest = () => {
  const pool = initDbPool();
  const app = initApp(pool).listen();
  const request = supertest(app);

  return {
    request,
    tearDown: () => {
      app.close();
      pool.end();
    },
  };
};

module.exports = {
  setUpSuperTest,
};
