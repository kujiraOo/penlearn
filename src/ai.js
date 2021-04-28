const selectAttackTarget = (unit, units) => {
  const sortedUnitsArray = units
    .filter((u) => u.partyId !== unit.partyId)
    .sort((unit1, unit2) => unit1.hp - unit2.hp);
  return sortedUnitsArray[0];
};

module.exports = {
  selectAttackTarget,
};
