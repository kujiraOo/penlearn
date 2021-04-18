const {
  turnQueue,
} = require('./round-system');

describe('turnQueue', () => {
  test('returns correct turn order of units', () => {
    const units = [{
      id: 1,
      name: 'Penguin',
      agl: 17,
      movePoints: 17,
    },
    {
      id: 2,
      name: 'Sawa',
      agl: 21,
      movePoints: 21,
    },
    {
      id: 3,
      name: 'Golem',
      agl: 8,
      movePoints: 8,
    },
    {
      id: 4,
      name: 'Golem Lord',
      agl: 10,
      movePoints: 10,
    }];

    expect(turnQueue(units)).toMatchObject([
      {
        id: 2, name: 'Sawa', agl: 21, movePoints: 21,
      },
      {
        id: 1, name: 'Penguin', agl: 17, movePoints: 17,
      },
      {
        id: 2, name: 'Sawa', agl: 21, movePoints: 15,
      },
      {
        id: 1, name: 'Penguin', agl: 17, movePoints: 11,
      },
      {
        id: 4, name: 'Golem Lord', agl: 10, movePoints: 10,
      },
      {
        id: 2, name: 'Sawa', agl: 21, movePoints: 9,
      },
      {
        id: 3, name: 'Golem', agl: 8, movePoints: 8,
      },
      {
        id: 2, name: 'Sawa', agl: 21, movePoints: 24,
      },
      {
        id: 1, name: 'Penguin', agl: 17, movePoints: 22,
      },
      {
        id: 2, name: 'Sawa', agl: 21, movePoints: 18,
      },
      {
        id: 1, name: 'Penguin', agl: 17, movePoints: 16,
      },
      {
        id: 4, name: 'Golem Lord', agl: 10, movePoints: 14,
      },
    ]);
  });
});
