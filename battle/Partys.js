const create = require('./create');

const idGenerator = () => {
  let generatedId = 0;

  return () => {
    generatedId += 1;

    return generatedId;
  };
};

const createAllies = (nextId) => [
  create.createUnit(
    nextId(),
    'Penguin',
  ),
  create.createUnit(
    nextId(),
    'Sawa',
  ),
  create.createUnit(
    nextId(),
    'Natasha',
  ),
];

const createEnemies = (nextId) => [
  create.createUnit(
    nextId(),
    'Golem',
  ),
  create.createUnit(
    nextId(),
    'Golem Lord',
  ),
  create.createUnit(
    nextId(),
    'Lord of Golem Lords',
  ),
];

const nextId = idGenerator();

console.log(createAllies(nextId), createEnemies(nextId));
