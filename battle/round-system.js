const moveCost = 6;

const turnQueueLength = 12;

const copyObject = (object) => ({ ...object });

const sortUnitsByMovePoints = (units) => [...units]
  .sort((unit1, unit2) => unit2.movePoints - unit1.movePoints);

const pickUnitWithMaxMovePoints = (units) => sortUnitsByMovePoints(units)[0];

const calculateMovePoints = (units, movingUnitId) => {
  const newUnitArray = units.map(copyObject);
  const unit = newUnitArray.find((element) => element.id === movingUnitId);
  unit.movePoints -= moveCost;
  return newUnitArray;
};

const restoreMovePoints = (units) => units
  .map((unit) => ({ ...unit, movePoints: unit.movePoints + unit.agl }));

const unitsHaveEnoughMovePoints = (units) => !!units.find((unit) => unit.movePoints >= moveCost);

const turnQueue = (units) => {
  const queue = [];
  let tempUnits = units;
  for (let i = 0; i < turnQueueLength; i += 1) {
    if (!unitsHaveEnoughMovePoints(tempUnits)) {
      tempUnits = restoreMovePoints(tempUnits);
    }
    const unit = pickUnitWithMaxMovePoints(tempUnits);
    queue.push(unit);
    tempUnits = calculateMovePoints(tempUnits, unit.id);
  }
  return queue;
};

module.exports = {
  turnQueue,
};
