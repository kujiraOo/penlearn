const random = require('./random');

const createUnit = (id, name) => ({
  id,
  name,
  hp: random.randomHp(),
  mp: random.randomMp(),
  agl: random.randomAgl(),
  dmg: random.randomDmg(),
  def: random.randomDef(),
});

// console.log(createUnit('Hero', 20, 10, 5, 10, 10));

module.exports = {
  createUnit,
};
