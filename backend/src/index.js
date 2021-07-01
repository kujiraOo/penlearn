const initDbPool = require('./db/db-pool');
const app = require('./app');

const port = 3001;

const dbPool = initDbPool();

app(dbPool).listen(port, () => {
  console.log(`battle listens at port ${port}`);
});
