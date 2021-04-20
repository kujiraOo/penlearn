const attack = (attacker, target) => ({ ...target, hp: target.hp - attacker.attack + target.def });

const windStrike = (target) => {
  const newAttackedUnit = { ...target, hp: target.hp - 20 };
  console.log('WIND STRIKE IS LAUNCHED AT ', target.name);
  return newAttackedUnit;
};

module.exports = {
  attack,
  windStrike,
};
