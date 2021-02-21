let id = 0;
const CreateAlly = (name, hp, mp, agl, dmg, def) => {
  id = id + 1;
  return {id, name, hp, mp, agl, dmg, def};
};

//console.log(CreateAlly('Hero', 20, 10, 5, 10, 10));

const CreateEnemy = (name, hp, mp, agl, dmg, def) => {
  id = id + 1;
  return {id, name, hp, mp, agl, dmg, def};
};

//console.log(CreateEnemy('Golem ', 35, 0, 1, 5, 2));

module.exports = {
  CreateAlly,
  CreateEnemy,
};
