module.exports = (dbPool) => async (ctx, next) => {
  ctx.dbPool = dbPool;

  await next();
};
