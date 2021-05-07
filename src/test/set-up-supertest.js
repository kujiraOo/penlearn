const supertest = require('supertest');

const initApp = require('../app');
const initDbPool = require('../db/db-pool');

module.exports = () => {
  const dbPool = initDbPool();
  const app = initApp(dbPool).listen();
  const request = supertest(app);

  return {
    request,
    dbPool,
    tearDown: () => {
      app.close();
      dbPool.end();
    },
  };
};
