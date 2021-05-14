const { updateUnits, sortUnitsByMovePoints, sortUnitsByHp } = require('./helpers');
const { units } = require('./test-fixtures');

describe('updateUnits', () => {
  test('returns updated units array', () => {
    const result = updateUnits(units, [{
      id: 2,
      name: 'Sawa',
      hp: 100,
      def: 6,
      attack: -12,
      agl: 21,
      movePoints: 15,
      partyId: 'Allies',
    }]);

    expect(result).toMatchObject([
      {
        id: 1,
        name: 'Penguin',
        hp: 120,
        def: 12,
        attack: 21,
        agl: 17,
        movePoints: 17,
        partyId: 'Allies',
      },
      {
        id: 2,
        name: 'Sawa',
        hp: 100,
        def: 6,
        attack: -12,
        agl: 21,
        movePoints: 15,
        partyId: 'Allies',
      },
      {
        id: 3,
        name: 'Sadomasochist Golem',
        hp: 35,
        def: -3,
        attack: 12,
        agl: 8,
        movePoints: 8,
        partyId: 'Foes',
      },
      {
        id: 4,
        name: 'Golem Lord',
        hp: 50,
        def: 3,
        attack: 18,
        agl: 10,
        movePoints: 10,
        partyId: 'Foes',
      },
    ]);
  });
});

describe('sortUnitsByMovePoints', () => {
  test('sort in the right way', () => {
    const sortedArray = sortUnitsByMovePoints(units);

    expect(sortedArray).toMatchObject([
      {
        id: 2,
        name: 'Sawa',
        hp: 100,
        def: 6,
        attack: -12,
        agl: 21,
        movePoints: 21,
        partyId: 'Allies',
      },
      {
        id: 1,
        name: 'Penguin',
        hp: 120,
        def: 12,
        attack: 21,
        agl: 17,
        movePoints: 17,
        partyId: 'Allies',
      },
      {
        id: 4,
        name: 'Golem Lord',
        hp: 50,
        def: 3,
        attack: 18,
        agl: 10,
        movePoints: 10,
        partyId: 'Foes',
      },
      {
        id: 3,
        name: 'Sadomasochist Golem',
        hp: 35,
        def: -3,
        attack: 12,
        agl: 8,
        movePoints: 8,
        partyId: 'Foes',
      }]);
  });
});

describe('sortUnitsByHp', () => {
  test('sort in the right way', () => {
    const sortedArray = sortUnitsByHp(units);

    expect(sortedArray).toMatchObject([{
      id: 1,
      name: 'Penguin',
      hp: 120,
      def: 12,
      attack: 21,
      agl: 17,
      movePoints: 17,
      partyId: 'Allies',
    },
    {
      id: 2,
      name: 'Sawa',
      hp: 100,
      def: 6,
      attack: -12,
      agl: 21,
      movePoints: 21,
      partyId: 'Allies',
    },
    {
      id: 4,
      name: 'Golem Lord',
      hp: 50,
      def: 3,
      attack: 18,
      agl: 10,
      movePoints: 10,
      partyId: 'Foes',
    },
    {
      id: 3,
      name: 'Sadomasochist Golem',
      hp: 35,
      def: -3,
      attack: 12,
      agl: 8,
      movePoints: 8,
      partyId: 'Foes',
    }]);
  });
});
