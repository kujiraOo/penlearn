const random = require('./random');

const createUnit = (id, name) => {
  const aglRng = random.randomAgl();
  return ({
    id,
    name,
    hp: random.randomHp(),
    mp: random.randomMp(),
    agl: aglRng,
    dmg: random.randomDmg(),
    def: random.randomDef(),
    movePoints: aglRng,
  });
};

module.exports = createUnit;
