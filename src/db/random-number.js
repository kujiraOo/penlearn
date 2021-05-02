module.exports = {
  insert: ({ min, max, value }) => ({
    text: `
      insert into random_numbers (min, max, value)
        values ($1, $2, $3)
        returning id, value
    `,
    values: [min, max, value],
  }),
  selectMany: 'select id, value from random_numbers',
};
