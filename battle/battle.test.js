const { battle } = require('./battle');

describe('battle', () => {
  test('returns turnLog', () => {
    const allies = [
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
        movePoints: 21,
        partyId: 'Allies',
      },
    ];
    const foes = [
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
    ];
    const turnLog = battle(allies, foes);

    console.log(turnLog);

    expect(turnLog).toMatchObject([

    ]);
  });
});
