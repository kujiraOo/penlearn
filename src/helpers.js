const updateUnits = (units, updatedUnits) => units.map((unit) => (
  { ...(updatedUnits.find((u) => unit.id === u.id) || unit) }
));
const byMovePointsDesc = (unit1, unit2) => unit2.movePoints - unit1.movePoints;

const sortUnitsByMovePoints = (units) => [...units]
  .sort(byMovePointsDesc);

const byHpDesc = (unit1, unit2) => unit2.hp - unit1.hp;

const sortUnitsByHp = (units) => [...units]
  .sort(byHpDesc);

module.exports = {
  updateUnits,
  sortUnitsByMovePoints,
  byMovePointsDesc,
  byHpDesc,
  sortUnitsByHp,
};
