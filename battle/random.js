function random(min, max) {
  const minCeil = Math.ceil(min);
  const maxFloor = Math.floor(max);
  return Math.floor(Math.random() * (maxFloor - minCeil + 1)) + minCeil;
}

const randomHp = () => random(15, 35);
const randomMp = () => random(5, 15);
const randomAgl = () => random(8, 22);
const randomDmg = () => random(5, 12);
const randomDef = () => random(0, 10);

module.exports = {
  random,
  randomHp,
  randomMp,
  randomAgl,
  randomDmg,
  randomDef,
};
