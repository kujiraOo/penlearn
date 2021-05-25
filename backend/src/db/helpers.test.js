const { sql } = require('./helpers');

describe('helpers', () => {
  describe('sql', () => {
    test('behaves exactly like normal template string', () => {
      expect(sql`select ${1} from numbers`).toEqual(`select ${1} from numbers`);
    });
  });
});
