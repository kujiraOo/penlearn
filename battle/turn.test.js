const { turn } = require('./turn');
const { units } = require('./test-fixtures');

describe('turn', () => {
  test('returns coreect turn result', () => {
    expect(turn(units)).toBe(3);
  });
});
