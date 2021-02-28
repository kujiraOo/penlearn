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

module.exports = createUnit;
