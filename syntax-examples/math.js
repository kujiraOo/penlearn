const PI = 3.14;

const add = (a, b) => a + b;

const multiply = (a, b) => a * b;

const divide = (a, b) => {
  if (b === 0) {
    throw new Error('cannot divide by 0');
  }
  return a / b;
};

module.exports = {
  PI,
  add,
  multiply,
  divide,
};
