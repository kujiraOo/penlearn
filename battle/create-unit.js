const random = require('./random');

const createUnit = (id, name) => {
  const rngAgl = random.randomAgl()
  return ({
  id,
  name,
  hp: random.randomHp(),
  mp: random.randomMp(),
  agl: rngAgl,
  dmg: random.randomDmg(),
  def: random.randomDef(),
  movepoints: rngAgl,
})};

module.exports = createUnit;

console.log(createUnit(1, "Huy"))