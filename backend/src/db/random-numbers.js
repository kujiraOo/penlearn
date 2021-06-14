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

  select: (id) => ({
    text: sql`
      select id, min, max, value, created_at, updated_at
      from random_numbers
      where id = $1 and not deleted 
    `,

    values: [id],

  }),

  update: ({
    min, max, value, id,
  }) => ({
    text: sql`
      update random_numbers
      set min = $1, max = $2, value = $3 
      where id = $4 and not deleted 
      returning min, max, value, id, created_at, updated_at
    `,

    values: [min, max, value, id],

  }),

  delete: (id) => ({
    text: sql`
      update random_numbers
      set deleted = true 
      where id = $1 and not deleted 
      returning id, deleted
    `,

    values: [id],

  }),
};
