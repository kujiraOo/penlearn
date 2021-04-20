const attack = (attacker, target) => {
  const newTarget = { ...target, hp: target.hp - attacker.attack + target.def };
  return newTarget;
};

module.exports = {
  attack,
};
