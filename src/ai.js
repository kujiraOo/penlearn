const { sortUnitsByMovePoints } = require('./helpers');

const { turnQueue } = require('./round-system');

const findEnemies = (actor, units) => units
  .filter((u) => u.partyId !== actor.partyId);

const isAlly = (unit) => (otherUnit) => unit.partyId === otherUnit.partyId
  && unit.id !== otherUnit.id;

const findAlly = (unit, units) => units.find(isAlly(unit));

const findAllies = (unit, units) => units.filter(isAlly(unit));

const selectTargetWithLowestHp = (enemies) => enemies
  .sort((unit1, unit2) => unit1.hp - unit2.hp)[0];

const killableEnemies = (actor, enemies) => enemies
  .filter((e) => e.hp < actor.attack);

const unitWithId = (unitId) => (u) => u.id === unitId;

const enemiesActBeforeTarget = (ally, units) => {
  const queue = turnQueue(units);
  const allyTurnNumber = queue.findIndex(unitWithId(ally.id));
  const slicedQueue = queue.slice(0, allyTurnNumber);
  const enemiesActingBeforeTarget = slicedQueue.filter((e) => e.partyId !== ally.partyId);
  return enemiesActingBeforeTarget;
};

const findKillers = (target, attackers) => attackers
  .filter((e) => e.attack > target.hp);

const selectPreemptibleKiller = (actor, units) => {
  const ally = findAlly(actor, units);
  const killers = findKillers(ally, enemiesActBeforeTarget(ally, units));
  const sortedKillersArray = sortUnitsByMovePoints(killableEnemies(actor, killers));

  return sortedKillersArray[0];
};

const selectAttackTarget = (actor, units) => {
  const enemies = findEnemies(actor, units);
  const allies = findAllies(actor, units);
  if (killableEnemies(actor, enemies).length > 0 && allies.length > 0) {
    const target = selectPreemptibleKiller(actor, units);
    if (target) return target;
  }

  return selectTargetWithLowestHp(enemies);
};

module.exports = {
  selectAttackTarget,
  killableEnemies,
  findEnemies,
  targetEnemyBeforeAllyDeath: selectPreemptibleKiller,
  findAlly,
  enemiesActBeforeTarget,
  enemiesThatCanKillAlly: findKillers,
};
