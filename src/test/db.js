module.exports = {
  resetDb: (dbPool) => dbPool.query('truncate random_numbers restart identity'),
};
