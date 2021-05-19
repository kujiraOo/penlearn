exports.shorthands = undefined;

exports.up = (pgm) => {
  pgm.addColumn('random_numbers', {
    updated_at: {
      type: 'timestamp',
      notNull: true,
      default: pgm.func('current_timestamp'),
    },
  });

  pgm.createFunction(
    'set_updated_at',
    [],
    {
      returns: 'trigger',
      language: 'plpgsql',
    },
    `
      BEGIN
        NEW.updated_at := now();
        RETURN NEW;
      END;
    `,
  );

  pgm.createTrigger(
    'random_numbers',
    'set_updated_at',
    {
      when: 'BEFORE',
      operation: 'UPDATE',
      function: 'set_updated_at',
      functionParams: [],
      level: 'ROW',
    },
  );
};

exports.down = (pgm) => {
  pgm.dropTrigger('random_numbers', 'set_updated_at');
  pgm.dropFunction('set_updated_at');
  pgm.dropColumn('random_numbers', ['updated_at']);
};
