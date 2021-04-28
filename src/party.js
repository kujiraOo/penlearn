const createUnit = require('./create-unit');

const createAllies = (nextId) => [
  createUnit(
    nextId(),
    'Penguin',
  ),
  createUnit(
    nextId(),
    'Sawa',
  ),
  createUnit(
    nextId(),
    'Natasha',
  ),
];

const createEnemies = (nextId) => [
  createUnit(
    nextId(),
    'Golem',
  ),
  createUnit(
    nextId(),
    'Golem Lord',
  ),
  createUnit(
    nextId(),
    'Lord of Golem Lords',
  ),
];

module.exports = {
  createAllies,
  createEnemies,
};
