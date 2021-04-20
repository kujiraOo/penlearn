const { attack } = require('./abilities');

describe('attack', () => {
  test('returns attacked unit with updated hp', () => {
    const attacker = { attack: 15 };
    const targetBeforeAttack = { hp: 60, def: 10 };
    const targetAfterAttack = attack(attacker, targetBeforeAttack);
    expect(targetAfterAttack.hp)
      .toBe(targetBeforeAttack.hp - attacker.attack + targetBeforeAttack.def);
  });
});
