const { turn } = require('./turn');

const isBattleOver = (units) => {
  const unitCountByParty = units.reduce((acc, unit) => {
    if (!acc[unit.partyId]) {
      acc[unit.partyId] = 1;
    } else {
      acc[unit.partyId] += 1;
    }

    return acc;
  }, {});

  return Object.keys(unitCountByParty).length <= 1;
};

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
