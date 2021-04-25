const { selectAttackTarget } = require('./ai');
const {
  unitsHaveEnoughMovePoints,
  restoreMovePoints,
  updateMovePoints,
  pickUnitWithMaxMovePoints,
} = require('./round-system');
const { attack } = require('./abilities');

const updateUnits = (units, updatedUnits) => units.map((unit) => (
  { ...(updatedUnits.find((u) => unit.id === u.id) || unit) }
));

const turn = (units) => {
  const tempUnitsInBattle = unitsHaveEnoughMovePoints(units)
    ? units
    : restoreMovePoints(units);
  const actor = pickUnitWithMaxMovePoints(tempUnitsInBattle);
  const actorAfter = updateMovePoints(actor);
  const target = selectAttackTarget(actor, tempUnitsInBattle);
  const targetAfter = attack(actor, target);
  const updatedUnits = updateUnits(units, [targetAfter, actorAfter])
    .filter((unit) => unit.hp > 0);

  return {
    actor,
    action: {
      targetBefore: target,
      targetAfter,
    },
    units: updatedUnits,
  };
};

module.exports = {
  turn,
};
