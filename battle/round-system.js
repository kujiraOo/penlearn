const moveCost = 6;

const logLength = 12;

const alliedParty = [{
  id: 1,
  name: 'Penguin',
  hp: 33,
  mp: 0,
  agl: 17,
  dmg: 7,
  def: 3,
  movePoints: 17,
},
{
  id: 2,
  name: 'Sawa',
  hp: 28,
  mp: 16,
  agl: 21,
  dmg: 9,
  def: 0,
  movePoints: 21,
}];

const enemyParty = [{
  id: 3,
  name: 'Golem',
  hp: 35,
  mp: 0,
  agl: 8,
  dmg: 3,
  def: -3,
  movePoints: 8,
},
{
  id: 4,
  name: 'Golem Lord',
  hp: 70,
  mp: 1,
  agl: 10,
  dmg: 6,
  def: -6,
  movePoints: 10,
}];

const unitToTurnLogItem = ({
  id, name, agl, movePoints,
}) => ({
  id, name, agl, movePoints,
});

const copyObject = (unit) => ({ ...unit });

const turnLog = [...alliedParty.map(copyObject), ...enemyParty.map(copyObject)];

const sortUnitsByMovepoints = (units) => units.sort(
  (unit1, unit2) => unit2.movePoints - unit1.movePoints,
);

const pickUnitWithMaxMovepoints = (units) => {
  sortUnitsByMovepoints(units);
  return units[0];
};

const calculateMovepoints = (units, movingUnitId) => {
  const newUnitArray = units.map(copyObject);
  const unit = newUnitArray.find((element) => element.id === movingUnitId);
  unit.movePoints -= moveCost;
  return newUnitArray;
};

const restoreMovepoints = (units) => units
  .map((unit) => ({ ...unit, movePoints: unit.movePoints + unit.agl }));

const unitsHaveEnoughMovepoints = (units) => !!units.find((unit) => unit.movePoints >= moveCost);

const turnQueue = (units) => {
  const queue = [];
  let tempUnits = units;
  for (let i = 0; i < logLength; i += 1) {
    if (!unitsHaveEnoughMovepoints(tempUnits)) {
      tempUnits = restoreMovepoints(tempUnits);
    }
    const unit = pickUnitWithMaxMovepoints(tempUnits);
    queue.push(unit);
    tempUnits = calculateMovepoints(tempUnits, unit.id);
  }
  return queue;
};

console.log(turnQueue(turnLog).map(unitToTurnLogItem), turnLog);
