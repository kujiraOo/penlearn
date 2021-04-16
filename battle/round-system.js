const newParty = require('./party');
const idGenerator = require('./id-generator');

const nextId = idGenerator();

// const alliedParty = newParty.createAllies(nextId);

// const enemyParty = newParty.createEnemies(nextId);

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

const copyUnit = (unit) => ({ ...unit });

/* const turnCreate = (team1) => team1.map(unitToTurnLogItem);

const turnCreate2 = (team) => {
  const team2 = [];
  for (let i = 0; i < team.length; i += 1) {
    team2.push(unitToTurnLogItem(team[i]));
  }
  return team2;
}; */

const turnLog = [...alliedParty.map(copyUnit), ...enemyParty.map(copyUnit)];

const sortUnitByMovepoints = (turnLogToSort) => turnLogToSort.sort(
  (movePoints1, movePoints2) => movePoints2.movePoints - movePoints1.movePoints,
);

const pickUnitWithMaxMovepoints = (units) => {
  sortUnitByMovepoints(units);
  return units[0];
};

const moveCost = 6;

const calculateMovepoints = (units, movingUnitId) => {
  const newUnitsArray = units.map(copyUnit);
  const unit = newUnitsArray.find((element) => element.id === movingUnitId);
  unit.movePoints -= moveCost;
  return newUnitsArray;
};

const restoreMovepoints = (units) => {
  const newUnitsArray = units.map(copyUnit);
  newUnitsArray.forEach((element) => {
    element.movePoints += element.agl;
  });
  return newUnitsArray;
};

const unitsHaveEnoughMovepoints = (units) => !!units.find((unit) => unit.movePoints >= moveCost);

const calculateTurn = (units) => {
  console.log(units.map(unitToTurnLogItem));
  const unit = pickUnitWithMaxMovepoints(units);
  console.log(unit);
  /* if (!unitHasEnoughMovepoints(unit)) {
    const restoredUnits = restoreMovepoints(units);
    const pickedRestoredUnit = pickUnitWithMaxMovepoints(restoredUnits);
    calculateMovepoints(restoredUnits, pickedRestoredUnit.id);
    return pickedRestoredUnit;
  }
  */
  calculateMovepoints(units, unit.id);
  return unit;
};

const turnQueue = (units) => {
  const queue = [];
  let tempUnits = units;
  for (let i = 0; i < 12; i += 1) {
    if (!unitsHaveEnoughMovepoints(tempUnits)) {
      tempUnits = restoreMovepoints(tempUnits);
    }
    const unit = pickUnitWithMaxMovepoints(tempUnits);
    queue.push(unit);
    tempUnits = calculateMovepoints(tempUnits, unit.id);
  }
  return queue;
};
// console.log(sortUnitByMovepoints(turnLog).map(unitToTurnLogItem));

// console.log(calculateMovepoints(turnLog, 2).map(unitToTurnLogItem));

console.log(turnQueue(turnLog).map(unitToTurnLogItem));

// console.log(restoreMovepoints(turnLog));

/* console.log(turnLog(alliedParty));

console.log(alliedParty);

//console.log(turnLog(alliedParty));

const numbers1 = [1, 2, 3, 4];
const numbers2 = [5, 6, 7, 8];

const numbers = [...numbers1, ...numbers2];

numbers2.push()
//const addnumbers = numbers.map((number) => number + 1);
console.log(numbers)

/*const names = [
  {
    firstName: 'Ivan',
    lastName: 'Neivan',
  },
  {
    firstName: 'Sawa',
    lastName: 'Nesawa',
  },
];
const arrayWithTwoStrings = names.map(({ firstName, lastName }) => firstName + lastName);

console.log(arrayWithTwoStrings); */
