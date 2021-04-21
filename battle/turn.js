const { units } = require('./test-fixtures');
const { selectAttackTarget } = require('./ai');
const {
  turnQueue,
  unitsHaveEnoughMovePoints,
  restoreMovePoints,
  calculateMovePoints,
  pickUnitWithMaxMovePoints,
  sortUnitsByMovePoints,
  moveCost,
  turnQueueLength,
} = require('./round-system');

const turn = (unitsInBattle) => {
  const attacker = pickUnitWithMaxMovePoints(sortUnitsByMovePoints(unitsInBattle));
  if (!unitsHaveEnoughMovePoints(unitsInBattle)) {
    tempUnits = restoreMovePoints(unitsInBattle);
  }
  const target = selectAttackTarget(attacker, unitsInBattle);

};

module.exports = {
  turn,
};
