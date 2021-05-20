const { turn } = require('./turn');

const isBattleOver = (units) => !units.find((unit) => unit.partyId !== units[0].partyId);

const battle = (party1, party2) => {
  const turnLog = [];
  let units = [...party1, ...party2];

  while (!isBattleOver(units)) {
    const turnResult = turn(units);
    turnLog.push(turnResult);
    units = turnResult.units;
  }

  return turnLog;
};

module.exports = {
  battle,
};
