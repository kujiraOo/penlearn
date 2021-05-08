const updateUnits = (units, updatedUnits) => units.map((unit) => (
  { ...(updatedUnits.find((u) => unit.id === u.id) || unit) }
));

const sortUnitsByMovePoints = (units) => [...units]
  .sort((unit1, unit2) => unit2.movePoints - unit1.movePoints);

module.exports = {
  updateUnits,
  sortUnitsByMovePoints,
};
