const newParty = require('./party');
const idGenerator = require('./id-generator');

const nextId = idGenerator();

const alliedParty = newParty.createAllies(nextId);

const enemyParty = newParty.createEnemies(nextId);

const turnCreate = (team1) => team1.map(({ id, name, agl }) => ({ id, name, move }));

const turnLog = [...turnCreate(alliedParty), ...turnCreate(enemyParty)];

console.log(turnLog);

/*console.log(turnLog(alliedParty));

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

console.log(arrayWithTwoStrings);*/
