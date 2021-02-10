// if statement

if (true) {
  console.log('true');
}

if (false) {
  console.log('false');
}

if (false) {
  console.log('a');
} else {
  console.log('b');
}

if (6 > 3) {
  console.log('6 > 3');
}

const isGreater = 4 > 2;

console.log('isGreater =', isGreater);

if (isGreater) {
  console.log('isGreater');
}

if (false) {
  console.log('a');
} else if (true) {
  console.log('b');
} else if (true) {
  console.log('c');
} else {
  console.log('d');
}

// weird booleans

// with numbers

// convert any value to boolean

console.log(!!0); // double negation

console.log(Boolean(0)); // BooleanConstructor

console.log(!!123);

console.log(Boolean(123123));

console.log(!false); // normal negation

console.log(!!'');

console.log(!!'ab');

// array, object and function are objects, objects are always truthy

console.log(!![]);

console.log(!![1, 2, 3]);

console.log(!!(() => {}));

console.log(!!{});

console.log(!!null);

console.log(!!undefined);

// comparison

console.log(1 === 1); // use this

console.log('{} === {}', {} === {}); // use this

console.log(1 == 1); // don't use this

console.log('{} == {}', {} == {}); // use this

console.log('1' == 1);

console.log([2] == 2);

console.log('null == undefined', null == undefined);

console.log('null == false', null == false);

console.log('undefined == false', undefined == false);

console.log('0 == false', 0 == false);

console.log('\'\' == false', '' == false);

console.log('1 !== 2', 1 !== 2); // use this

console.log('2 > 1', 2 > 1);

console.log('2 < 1', 2 < 1);

console.log('2 <= 2', 2 <= 2);

console.log('2 >= 1', 2 >= 1);

console.log('a < b', 'a' < 'b');

console.log('{} > []', {} > []);

// comparing objects

const a = {};

const b = a;

console.log('objects a === b', a === b);

// boolean logic

// && - and

console.log('true && false', true && false);

console.log('false && true', false && true);

console.log('false && false', false && false);

console.log('true && true', true && true);

console.log('7 && 8', 7 && 8); // if first is true returns second

console.log('0 && 8', 0 && 8); // if first is false returns first

const getName = (userData) => userData && userData.name; // null check

// || - or

console.log('true || false', true || false);

console.log('false || true', false || true);

console.log('false || false', false || false);

console.log('true || true', true || true);

console.log('7 || 8', 7 || 8); // if first is true returns first

console.log('0 || 8', 0 || 8); // if first is false returns second

const sumWithDefault10Bad = (x, y) => {
  y = y || 10;

  return x + y;
};

console.log(sumWithDefault10Bad(1));

const sumWithDefault10 = (x, y = 10) => x + y;

console.log(sumWithDefault10(1));

// switch, for loop, ternary, array.find, array.sort, array.filter
