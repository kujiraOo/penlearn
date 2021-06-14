exports.shorthands = undefined;

exports.up = (pgm) => {
  pgm.addColumn('random_numbers', {
    deleted: {
      type: 'bool',
      notNull: true,
      default: false,
    },
  });
};

exports.down = (pgm) => {
  pgm.dropColumn('random_numbers', ['deleted']);
};
