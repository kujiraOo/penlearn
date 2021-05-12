const updateUnits = (units, updatedUnits) => units.map((unit) => (
  { ...(updatedUnits.find((u) => unit.id === u.id) || unit) }
));
const byMovePointsDesc = (unit1, unit2) => unit2.movePoints - unit1.movePoints;

const sortUnitsByMovePoints = (units) => [...units]
  .sort(byMovePointsDesc);

module.exports = {
  updateUnits,
  sortUnitsByMovePoints,
  byMovePointsDesc,
};
