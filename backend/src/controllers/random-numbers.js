const Router = require('@koa/router');
const Joi = require('joi');

const { random } = require('../random');
const randomNumbers = require('../db/random-numbers');

const validate = (schema, value, ctx) => {
  const { error } = schema.validate(value);

  if (error) {
    ctx.throw(400, error.message);
  }
};

module.exports = new Router({ prefix: '/random-numbers' })
  .get('/', async (ctx) => {
    const { rows } = await ctx.dbPool.query(randomNumbers.selectAll);

    ctx.body = rows;
  })
  .put('/:id', async (ctx) => {
    validate(
      Joi.object({
        min: Joi.number().required(),
        max: Joi.number().required(),
        value: Joi.number().required(),
      }),
      ctx.request.body,
      ctx,
    );

    validate(
      Joi.object({
        id: Joi.number().required(),
      }),
      ctx.params,
      ctx,
    );

    const { min, max, value } = ctx.request.body;

    const { id } = ctx.params;

    const query = randomNumbers.update({
      id,
      min,
      max,
      value,
    });

    const { rows } = await ctx.dbPool.query(query);

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
