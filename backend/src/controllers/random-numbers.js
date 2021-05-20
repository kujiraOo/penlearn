const Router = require('@koa/router');
const Joi = require('joi');

const { random } = require('../random');
const randomNumbers = require('../db/random-numbers');

module.exports = new Router({ prefix: '/random-numbers' })
  .get('/', async (ctx) => {
    const { rows } = await ctx.dbPool.query(randomNumbers.selectAll);

    ctx.body = rows;
  })
  .post('/', async (ctx) => {
    const { error } = Joi.object({
      min: Joi.number().required(),
      max: Joi.number().required(),
    }).validate(ctx.request.body);

    if (error) {
      ctx.throw(400, error.message);
    }

    const { min, max } = ctx.request.body;

    const query = randomNumbers.insert({
      min,
      max,
      value: random(min, max),
    });

    const { rows: [randomNumber] } = await ctx.dbPool.query(query);

    ctx.body = { randomNumber };
  });
