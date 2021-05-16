const testFixtures = require('./test-fixtures');
const {
  selectAttackTarget,
} = require('./ai');

describe('ai', () => {
  describe('selectAttackTarget', () => {
    test('returns unit with lowest hp from opposite party', () => {
      const { units } = testFixtures;
      const sawa = units[1];
      const sadomasochistGolem = selectAttackTarget(sawa, units);

      expect(sadomasochistGolem.id).toBe(3);
    });

    test('returns enemy that acts before an ally, can kill the ally and is killable by actor', () => {
      const units = [
        {
          id: 2,
          name: 'Sawa',
          hp: 100,
          def: 6,
          attack: 9999,
          agl: 21,
          movePoints: 16,
          partyId: 'Allies',
        },
        {
          id: 4,
          name: 'Golem Lord',
          hp: 35,
          def: 3,
          attack: 18,
          agl: 14,
          movePoints: 14,
          partyId: 'Foes',
        },
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
      ];

      const actor = units[0];

      const target = selectAttackTarget(actor, units);

      expect(target).toMatchObject(
        {
          id: 4,
          name: 'Golem Lord',
          hp: 35,
          def: 3,
          attack: 18,
          agl: 14,
          movePoints: 14,
          partyId: 'Foes',
        },
      );
    });

    test('prioritizes selectPreemptibleKiller over selectKillableEnemy', () => {
      const units = [
        {
          id: 2,
          name: 'Sawa',
          hp: 100,
          def: 6,
          attack: 9999,
          agl: 21,
          movePoints: 16,
          partyId: 'Allies',
        },
        {
          id: 4,
          name: 'Golem Lord',
          hp: 35,
          def: 3,
          attack: 18,
          agl: 14,
          movePoints: 14,
          partyId: 'Foes',
        },
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
        {
          id: 3,
          name: 'Sadomasochist Golem',
          hp: 50,
          def: -3,
          attack: 12,
          agl: 8,
          movePoints: 8,
          partyId: 'Foes',
        },
      ];
      const actor = units[0];

      const target = selectAttackTarget(actor, units);

      expect(target).toMatchObject(
        {
          id: 4,
          name: 'Golem Lord',
          hp: 35,
          def: 3,
          attack: 18,
          agl: 14,
          movePoints: 14,
          partyId: 'Foes',
        },
      );
    });

    test('returns killable enemy with highest hp', () => {
      const units = [
        {
          id: 2,
          name: 'Sawa',
          hp: 100,
          def: 6,
          attack: 9999,
          agl: 21,
          movePoints: 16,
          partyId: 'Allies',
        },
        {
          id: 4,
          name: 'Golem Lord',
          hp: 35,
          def: 3,
          attack: 18,
          agl: 14,
          movePoints: 14,
          partyId: 'Foes',
        },
        {
          id: 1,
          name: 'Penguin',
          hp: 999,
          def: 0,
          attack: 21,
          agl: 12,
          movePoints: 12,
          partyId: 'Allies',
        },
        {
          id: 3,
          name: 'Sadomasochist Golem',
          hp: 50,
          def: -3,
          attack: 12,
          agl: 8,
          movePoints: 8,
          partyId: 'Foes',
        },
      ];
      const actor = units[0];

      const target = selectAttackTarget(actor, units);

      expect(target).toMatchObject(
        {
          id: 3,
          name: 'Sadomasochist Golem',
          hp: 50,
          def: -3,
          attack: 12,
          agl: 8,
          movePoints: 8,
          partyId: 'Foes',
        },
      );
    });

    test('returns killable enemy that can kill ally and have highest hp', () => {
      const units = [
        {
          id: 2,
          name: 'Sawa',
          hp: 100,
          def: 6,
          attack: 9999,
          agl: 21,
          movePoints: 16,
          partyId: 'Allies',
        },
        {
          id: 4,
          name: 'Golem Lord',
          hp: 35,
          def: 3,
          attack: 18,
          agl: 14,
          movePoints: 14,
          partyId: 'Foes',
        },
        {
          id: 3,
          name: 'Sadomasochist Golem',
          hp: 50,
          def: -3,
          attack: 12,
          agl: 13,
          movePoints: 13,
          partyId: 'Foes',
        },
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
        {
          id: 4,
          name: 'Lord of Golem Lord',
          hp: 99,
          def: 3,
          attack: 18,
          agl: 8,
          movePoints: 8,
          partyId: 'Foes',
        },
      ];
      const actor = units[0];

      const target = selectAttackTarget(actor, units);

      expect(target).toMatchObject(
        {
          id: 3,
          name: 'Sadomasochist Golem',
          hp: 50,
          def: -3,
          attack: 12,
          agl: 13,
          movePoints: 13,
          partyId: 'Foes',
        },
      );
    });
  });
});
