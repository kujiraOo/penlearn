const { byMovePointsDesc } = require('./helpers');

const { turnQueue } = require('./round-system');

const isEnemyOf = (unit) => (otherUnit) => unit.partyId !== otherUnit.partyId;

const isAllyOf = (unit) => (otherUnit) => unit.partyId === otherUnit.partyId
  && unit.id !== otherUnit.id;

const selectTargetWithLowestHp = (enemies) => enemies
  .sort((unit1, unit2) => unit1.hp - unit2.hp)[0];

const unitWithId = (unitId) => (u) => u.id === unitId;

const canKill = (target) => (attacker) => attacker.attack >= target.hp;

const canBeKilledBy = (attacker) => (target) => canKill(target)(attacker);

const selectPreemptibleKiller = (actor, units) => {
  const ally = units.find(isAllyOf(actor));
  const queue = turnQueue(units);
  const allyTurnNumber = queue.findIndex(unitWithId(ally.id));

  return queue
    .slice(0, allyTurnNumber)
    .filter(isEnemyOf(ally))
    .filter(canKill(ally))
    .filter(canBeKilledBy(actor))
    .sort(byMovePointsDesc)[0];
};

const selectAttackTarget = (actor, units) => {
  const enemies = units.filter(isEnemyOf(actor));
  const hasAllies = units.filter(isAllyOf(actor)).length > 0;
  const hasKillableEnemies = units.filter(canBeKilledBy(actor)).length > 0;

  if (hasKillableEnemies && hasAllies) {
    const target = selectPreemptibleKiller(actor, units);
    if (target) return target;
  }

  return selectTargetWithLowestHp(enemies);
};

module.exports = {
  selectAttackTarget,
  selectPreemptibleKiller,
};
