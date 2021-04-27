const { updateUnits } = require('./helpers');

const moveCost = 6;

const turnQueueLength = 12;

const sortUnitsByMovePoints = (units) => [...units]
  .sort((unit1, unit2) => unit2.movePoints - unit1.movePoints);

const pickUnitWithMaxMovePoints = (units) => sortUnitsByMovePoints(units)[0];

const updateMovePoints = (unit) => ({
  ...unit, movePoints: unit.movePoints - moveCost,
});

const restoreMovePoints = (units) => units
  .map((unit) => ({ ...unit, movePoints: unit.movePoints + unit.agl }));

const unitsHaveEnoughMovePoints = (units) => !!units.find((unit) => unit.movePoints >= moveCost);

const turnQueue = (units) => {
  const queue = [];
  let tempUnits = units;
  for (let i = 0; i < turnQueueLength; i += 1) {
    tempUnits = unitsHaveEnoughMovePoints(tempUnits)
      ? tempUnits
      : restoreMovePoints(tempUnits);

    const unit = pickUnitWithMaxMovePoints(tempUnits);
    queue.push(unit);
    tempUnits = updateUnits(tempUnits, [updateMovePoints(unit)]);
  }
  return queue;
};

module.exports = {
  turnQueue,
  unitsHaveEnoughMovePoints,
  restoreMovePoints,
  updateMovePoints,
  pickUnitWithMaxMovePoints,
  sortUnitsByMovePoints,
  moveCost,
  turnQueueLength,
};
