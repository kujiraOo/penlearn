const { units } = require('./test-fixtures');
const { attack } = require('./abilities');
const { selectAttackTarget } = require('./ai');

describe('attack', () => {
  test('returns attacked unit with updated hp', () => {
    const penguin = units[0];
    const target = selectAttackTarget(penguin, units);
    const newSadomasochistGolem = attack(penguin, target);
    expect(newSadomasochistGolem.hp).toBe(11);
  });
});
