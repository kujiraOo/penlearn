exports.shorthands = undefined;

exports.up = (pgm) => {
  pgm.createTable('random_numbers', {
    id: 'id',
    value: {
      type: 'integer',
      notNull: true,
    },
    created_at: {
      type: 'timestamp',
      notNull: true,
      default: pgm.func('current_timestamp'),
    },
  });
};

exports.down = (pgm) => {
  pgm.dropTable('random_numbers');
};
