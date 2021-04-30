const { units } = require('./test-fixtures');
const {
  selectAttackTarget,
  killableEnemies,
  findEnemies,
  findAlly,
} = require('./ai');

describe('selectAttackTarget', () => {
  test('returns unit with lowest hp from opposite party', () => {
    const sawa = units[1];
    const sadomasochistGolem = selectAttackTarget(sawa, units);
    expect(sadomasochistGolem.id).toBe(3);
  });
});

describe('selectAttackTarget', () => {
  test('returns killable units from opposite party', () => {
    const allies = [{
      id: 1,
      name: 'Penguin',
      hp: 1,
      def: 0,
      attack: 21,
      agl: 12,
      movePoints: 12,
      partyId: 'Allies',
    },
    {
      id: 2,
      name: 'Sawa',
      hp: 100,
      def: 6,
      attack: 9999,
      agl: 21,
      movePoints: 21,
      partyId: 'Allies',
    },
    ];
    const foes = [{
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
      agl: 14,
      movePoints: 14,
      partyId: 'Foes',
    }];
    const testUnits = [...allies, ...foes];

    const sawa = allies[1];

    const killableUnits = killableEnemies(sawa, findEnemies(sawa, testUnits));

    expect(killableUnits).toMatchObject([{
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
      agl: 14,
      movePoints: 14,
      partyId: 'Foes',
    }]);
  });

  test('returns correct ally', () => {
    const allies = [{
      id: 1,
      name: 'Penguin',
      hp: 1,
      def: 0,
      attack: 21,
      agl: 12,
      movePoints: 12,
      partyId: 'Allies',
    },
    {
      id: 2,
      name: 'Sawa',
      hp: 100,
      def: 6,
      attack: 9999,
      agl: 21,
      movePoints: 21,
      partyId: 'Allies',
    },
    ];
    const foes = [{
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
      agl: 14,
      movePoints: 14,
      partyId: 'Foes',
    }];
    const testUnits = [...allies, ...foes];

    const sawa = allies[1];

    const ally = findAlly(sawa, testUnits);

    expect(ally).toMatchObject(
      {
        id: 1,
        name: 'Penguin',
        hp: 1,
        def: 0,
        attack: 21,
        agl: 12,
        movePoints: 12,
        partyId: 'Allies',
      },
    );
  });
});
