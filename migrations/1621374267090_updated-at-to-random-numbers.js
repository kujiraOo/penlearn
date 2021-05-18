exports.shorthands = undefined;

exports.up = (pgm) => {
  pgm.addColumn('random_numbers', {
    updated_at: {
      type: 'timestamp',
      notNull: true,
      default: pgm.func('current_timestamp'),
    },
  });
};

exports.down = (pgm) => {
  pgm.dropColumn('random_numbers', ['updated_at']);
};
