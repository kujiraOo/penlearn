const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const Router = require('@koa/router');

const examples = require('./controllers/examples');

const port = 3000;
const app = new Koa();

const router = new Router({ prefix: '/api' });

router.use(
  examples.routes(),
  examples.allowedMethods(),
);

app.use(bodyParser());

app.use(
  router.routes(),
  router.allowedMethods(),
);

app.listen(port, () => {
  console.log(`battle listens at port ${port}`);
});
