const { sql } = require('./helpers');

module.exports = {
  insert: ({ min, max, value }) => ({
    text: sql`
      insert into random_numbers (min, max, value)
        values ($1, $2, $3)
        returning id, value
    `,
    values: [min, max, value],
  }),

  selectAll: sql`select id, value from random_numbers`,

  update: ({
    min, max, value, id,
  }) => ({
    text: sql`
    update random_numbers 
      set min = $1, max = $2, value = $3, updated_at = now() 
    where id = $4
    returning min, max, value, id, created_at, updated_at`,

    values: [min, max, value, id],

  }),
};
