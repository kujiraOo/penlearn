const Router = require('@koa/router');

const { random } = require('../random');

module.exports = new Router({ prefix: '/examples' })
  .post('/random-hp', (ctx) => {
    const { minHp, maxHp } = ctx.request.body;

    if (typeof minHp !== 'number') {
      ctx.throw(400, 'minHp must be a number');
    }

    if (typeof maxHp !== 'number') {
      ctx.throw(400, 'maxHp must be a number');
    }

    ctx.body = {
      randomHp: random(minHp, maxHp),
    };
  });
