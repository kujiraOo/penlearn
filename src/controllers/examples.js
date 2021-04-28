const Router = require('@koa/router');

const { randomHp } = require('../random');

const router = new Router({ prefix: '/examples' });

router
  .post('/random-hp', (ctx) => {
    ctx.body = {
      randomHp: randomHp(),
    };
  });

module.exports = router;
