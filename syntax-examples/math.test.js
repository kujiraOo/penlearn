const {
  PI, add, multiply, divide,
} = require('./math');

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

describe('divide', () => {
  test('divides two numbers', () => {
    expect(divide(6, 2)).toBe(3);
  });

  test('cannot divide by 0', () => {
    expect(() => {
      divide(6, 0);
    }).toThrow('cannot divide by 0');
  });
});
