const { byMovePointsDesc, byHpDesc } = require('./helpers');

const { turnQueue } = require('./round-system');

const isEnemyOf = (unit) => (otherUnit) => unit.partyId !== otherUnit.partyId;

const isAllyOf = (unit) => (otherUnit) => unit.partyId === otherUnit.partyId
  && unit.id !== otherUnit.id;

const selectTargetWithLowestHp = (enemies) => enemies
  .sort((unit1, unit2) => unit1.hp - unit2.hp)[0];

const canKill = (target) => (attacker) => attacker.attack >= target.hp;

const canBeKilledBy = (attacker) => (target) => canKill(target)(attacker);

const selectKillableEnemy = (actor, units) => units
  .filter(isEnemyOf(actor))
  .filter(canBeKilledBy(actor))
  .sort(byHpDesc)[0];

const selectPreemptibleKiller = (actor, units) => {
  if (units.filter(isAllyOf(actor)).length === 0) return null;

  const queue = turnQueue(units);
  const ally = queue.find(isAllyOf(actor));
  const allyTurnNumber = queue.findIndex(isAllyOf(actor));

  return queue
    .slice(0, allyTurnNumber)
    .filter(isEnemyOf(ally))
    .filter(canKill(ally))
    .filter(canBeKilledBy(actor))
    .sort(byHpDesc)[0];
};

const selectAttackTarget = (actor, units) => {
  const enemies = units.filter(isEnemyOf(actor));
  const hasKillableEnemies = enemies.filter(canBeKilledBy(actor)).length > 0;

  if (hasKillableEnemies) {
    let target = selectPreemptibleKiller(actor, units);
    if (target) return target;

    target = selectKillableEnemy(actor, units);
    if (target) return target;
  }
  return selectTargetWithLowestHp(enemies);
};

module.exports = {
  selectAttackTarget,
};
