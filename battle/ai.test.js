const { units } = require('./test-fixtures');
const { selectAttackTarget } = require('./ai');

describe('selectAttackTarget', () => {
  test('returns unit with lowest hp from opposite party', () => {
    const sawa = units[1];
    const sadomasochistGolem = selectAttackTarget(sawa, units);
    expect(sadomasochistGolem.id).toBe(3);
  });
});
