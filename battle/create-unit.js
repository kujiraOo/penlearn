const random = require('./random');

const createUnit = (id, name) => {
  const agl = random.randomAgl();
  return ({
    id,
    name,
    hp: random.randomHp(),
    mp: random.randomMp(),
    agl,
    dmg: random.randomDmg(),
    def: random.randomDef(),
    movePoints: agl,
  });
};

module.exports = createUnit;
