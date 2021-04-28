const idGenerator = () => {
  let generatedId = 0;

  return () => {
    generatedId += 1;

    return generatedId;
  };
};

module.exports = idGenerator;
