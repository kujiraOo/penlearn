const { turn } = require('./turn');
const { units } = require('./test-fixtures');

describe('turn', () => {
  test('returns correct actor', () => {
    expect(turn(units).actor).toMatchObject({
      id: 2,
      name: 'Sawa',
      movePoints: 21,
      partyId: 'Allies',
    });
  });

  test('returns correct action.targetBefore', () => {
    expect(turn(units).action.targetBefore).toMatchObject({
      id: 3,
      name: 'Sadomasochist Golem',
      hp: 35,
      def: -3,
      partyId: 'Foes',
    });
  });

  test('returns correct action.targetAfter', () => {
    expect(turn(units).action.targetAfter).toMatchObject({
      id: 3,
      name: 'Sadomasochist Golem',
      hp: 44,
      def: -3,
      partyId: 'Foes',
    });
  });

  test('returns units with updated movePoints', () => {
    expect(turn(units).units).toMatchObject([
      {
        id: 1,
        name: 'Penguin',
        agl: 17,
        movePoints: 17,
        partyId: 'Allies',
      },
      {
        id: 2,
        name: 'Sawa',
        agl: 21,
        movePoints: 15,
        partyId: 'Allies',
      },
      {
        id: 3,
        name: 'Sadomasochist Golem',
        agl: 8,
        movePoints: 8,
        partyId: 'Foes',
      },
      {
        id: 4,
        name: 'Golem Lord',
        agl: 10,
        movePoints: 10,
        partyId: 'Foes',
      },
    ]);
  });

  test('returns units with updated hp', () => {
    expect(turn(units).units).toMatchObject([{
      id: 1,
      name: 'Penguin',
      hp: 120,
      partyId: 'Allies',
    },
    {
      id: 2,
      name: 'Sawa',
      hp: 100,
      partyId: 'Allies',
    },
    {
      id: 3,
      name: 'Sadomasochist Golem',
      hp: 44,
      partyId: 'Foes',
    },
    {
      id: 4,
      name: 'Golem Lord',
      hp: 50,
      partyId: 'Foes',
    }]);
  });

  test('removes dead unit', () => {
    const unitsMustDie = [{
      id: 1,
      name: 'Penguin',
      hp: 120,
      def: 12,
      attack: 9999,
      agl: 17,
      movePoints: 17,
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
    }];
    expect(turn(unitsMustDie).units).toMatchObject([{
      id: 1,
      name: 'Penguin',
      hp: 120,
      def: 12,
      attack: 9999,
      agl: 17,
      movePoints: 11,
      partyId: 'Allies',
    }]);
  });
});
