const Router = require('@koa/router');

const { random } = require('../random');
const randomNumbers = require('../db/random-number');

module.exports = new Router({ prefix: '/random-numbers' })
  .get('/', async (ctx) => {
    const { rows } = await ctx.dbPool.query(randomNumbers.selectMany);

    ctx.body = rows;
  })
  .post('/', async (ctx) => {
    const { min, max } = ctx.request.body;

    if (typeof min !== 'number') {
      ctx.throw(400, 'min must be a number');
    }

    if (typeof max !== 'number') {
      ctx.throw(400, 'max must be a number');
    }

    const query = randomNumbers.insert({
      min,
      max,
      value: random(min, max),
    });

    const { rows: [randomNumber] } = await ctx.dbPool.query(query);

    ctx.body = { randomNumber };
  });
