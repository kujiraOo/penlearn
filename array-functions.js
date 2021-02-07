const abilities = [
  {
    id: 'abl1',
    name: 'Hell Fury',
    element: 'fire',
    damage: 0,
    range: 999,
    cooldown: 1,
  },
  {
    id: 'abl2',
    name: 'Frozen Hell',
    element: 'ice',
    damage: 2,
    range: 222,
    cooldown: 100,
  },
  {
    id: 'abl3',
    name: 'Bolt in Your House',
    element: 'lightning',
    damage: 666,
    range: 333,
    cooldown: 111,
  },
];

const doubleDamageWithMutation = (ability) => {
  // eslint-disable-next-line no-param-reassign
  ability.damage *= 2;
};

abilities.forEach(doubleDamageWithMutation);

const doubleDamage = (ability) => ({
  ...ability,
  damage: 2 * ability.damage,
});

const abilitiesWithDoubleDamage = abilities.map(doubleDamage);

console.log(abilities);
console.log(abilitiesWithDoubleDamage);

const abilityNames = abilities.map(({ name }) => name);

console.log(abilityNames);

const badMapCallback = (ability) => {
  // eslint-disable-next-line no-param-reassign
  ability.damage = 0;
};

const wow = abilitiesWithDoubleDamage.map(badMapCallback); // very wow

console.log(abilitiesWithDoubleDamage);
console.log(wow);

const nestedNumbers = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

const double = (x) => 2 * x;

const notNestedNumbers = nestedNumbers.flatMap((a) => a.map(double));

console.log(notNestedNumbers);

const abilitiesById = abilities.reduce(
  (byId, ability) => ({
    ...byId,
    [ability.id]: ability,
  }),
  {},
);

const abilitiesById2 = {};

abilities.forEach((ability) => {
  abilitiesById2[ability.id] = ability;
});

console.log(abilitiesById2);

const numbers = [1, 2, 3, 2];

const sum = numbers.reduce((acc, n) => acc + n, 0);

console.log(sum);
