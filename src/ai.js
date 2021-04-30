const { turnQueue } = require('./round-system');

const findEnemies = (actor, units) => units
  .filter((u) => u.partyId !== actor.partyId);

const findAlly = (actor, units) => units
  .find((unit) => unit.partyId === actor.partyId && unit.id !== actor.id);

const selectTargetWithLowestHp = (enemies) => {
  const targets = enemies.sort((unit1, unit2) => unit1.hp - unit2.hp);

  return targets[0];
};

const killableEnemies = (actor, enemies) => enemies
  .filter((e) => e.hp < actor.attack);

const enemiesActBeforeTarget = (ally, units) => {
  const queue = turnQueue(units);
  const allyTurn = queue.find((u) => u.id === ally.id);
  const enemiesActingBeforeTarget = queue.filter((e) => e.partyId !== ally.partyId)
    .filter((actingEnemies) => actingEnemies.movePoints > allyTurn.movePoints);
  return enemiesActingBeforeTarget;
};

const enemiesThatCanKillAlly = (ally, enemiesActingBeforeTarget) => enemiesActingBeforeTarget
  .filter((e) => e.attack > ally.hp);

const targetEnemyBeforeAllyDeath = (actor, units) => {
  const ally = findAlly(actor, units);
  const targets = enemiesThatCanKillAlly(ally, enemiesActBeforeTarget(ally, units));
  const target = killableEnemies(actor, targets).sort((e1, e2) => e1.movePoints - e2.movePoints);

  return target[0];
};

const selectAttackTarget = (actor, units) => {
  const enemies = findEnemies(actor, units);
  const target = selectTargetWithLowestHp(enemies);

  return target;
};

module.exports = {
  selectAttackTarget,
  killableEnemies,
  findEnemies,
  targetEnemyBeforeAllyDeath,
  findAlly,
};

/* const target = units
    .filter((u) => u.partyId !== actor.partyId)
    .sort((unit1, unit2) => unit1.hp - unit2.hp);
 */
