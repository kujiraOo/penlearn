const { turn } = require('./turn');

const isBattleOver = (units) => !units.find((unit) => unit.partyId !== units[0].partyId);

const battle = (allies, foes) => {
  const turnLog = [];
  let units = [...allies, ...foes];

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
