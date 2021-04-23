const { selectAttackTarget } = require('./ai');
const {
  turnQueue,
  unitsHaveEnoughMovePoints,
  restoreMovePoints,
  updateMovePoints,
  pickUnitWithMaxMovePoints,
  sortUnitsByMovePoints,
  moveCost,
  turnQueueLength,
} = require('./round-system');
const { attack, windStrike } = require('./abilities');

const updateHp = (units, updatedTarget) => units.map((unit) => ({
  ...unit,
  hp: unit.id === updatedTarget.id
    ? updatedTarget.hp
    : unit.hp,
}));

const turn = (units) => {
  const tempUnitsInBattle = unitsHaveEnoughMovePoints(units)
    ? units
    : restoreMovePoints(units);
  const actor = pickUnitWithMaxMovePoints(tempUnitsInBattle);
  const target = selectAttackTarget(actor, tempUnitsInBattle);
  const targetAfter = attack(actor, target);
  const unitsWithUpdatedMovePoints = updateMovePoints(tempUnitsInBattle, actor.id);
  const unitsWithUpdatedHp = updateHp(unitsWithUpdatedMovePoints, targetAfter)
    .filter((unit) => unit.hp > 0);
  return {
    actor,
    action: {
      targetBefore: target,
      targetAfter,
    },
    units: unitsWithUpdatedHp,
  };
};

module.exports = {
  turn,
};
