const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const Router = require('@koa/router');

const dbPool = require('./db/db-pool');
const dbPoolMiddleware = require('./middleware/db-pool-middleware');
const randomNumbers = require('./controllers/random-numbers');

const port = 3000;
const app = new Koa();
const router = new Router({ prefix: '/api' });

router.use(
  randomNumbers.routes(),
  randomNumbers.allowedMethods(),
);

app.use(dbPoolMiddleware(dbPool()));

app.use(bodyParser());

app.use(
  router.routes(),
  router.allowedMethods(),
);

app.listen(port, () => {
  console.log(`battle listens at port ${port}`);
});
