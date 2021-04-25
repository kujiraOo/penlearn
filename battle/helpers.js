const updateUnits = (units, updatedUnits) => units.map((unit) => (
  { ...(updatedUnits.find((u) => unit.id === u.id) || unit) }
));

module.exports = {
  updateUnits,
};
