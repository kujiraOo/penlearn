const { PI, add, multiply } = require('./math');

describe('PI', () => {
  test('equals 3.14', () => {
    expect(PI).toBe(3.14);
  });
});

describe('add', () => {
  test('adds two numbers', () => {
    expect(add(2, 2)).toBe(4);
  });
});

describe('multiply', () => {
  test('multiplies two numbers', () => {
    expect(multiply(2, 6)).toBe(12);
  });
});
