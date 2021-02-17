/* eslint-disable no-console */
// if statement

// eslint-disable-next-line no-constant-condition
if (true) {
  console.log('true');
}

// eslint-disable-next-line no-constant-condition
if (false) {
  console.log('false');
}

// eslint-disable-next-line no-constant-condition
if (false) {
  console.log('a');
} else {
  console.log('b');
}

// eslint-disable-next-line no-constant-condition
if (6 > 3) {
  console.log('6 > 3');
}

const isGreater = 4 > 2;

console.log('isGreater =', isGreater);

if (isGreater) {
  console.log('isGreater');
}

// eslint-disable-next-line no-constant-condition
if (false) {
  console.log('a');
// eslint-disable-next-line no-constant-condition
} else if (true) {
  console.log('b');
// eslint-disable-next-line no-constant-condition
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

// eslint-disable-next-line no-self-compare
console.log(1 === 1); // use this

// eslint-disable-next-line no-self-compare
console.log('{} === {}', {} === {}); // use this

// eslint-disable-next-line no-self-compare, eqeqeq
console.log(1 == 1); // don't use this

// eslint-disable-next-line no-self-compare, eqeqeq
console.log('{} == {}', {} == {}); // use this

// eslint-disable-next-line eqeqeq
console.log('1' == 1);

// eslint-disable-next-line eqeqeq
console.log([2] == 2);

console.log('null == undefined', undefined == null);

console.log('null == false', null == false);

// eslint-disable-next-line eqeqeq
console.log('undefined == false', undefined == false);

// eslint-disable-next-line eqeqeq
console.log('0 == false', 0 == false);

// eslint-disable-next-line eqeqeq
console.log('\'\' == false', '' == false);

console.log('1 !== 2', 1 !== 2); // use this

console.log('2 > 1', 2 > 1);

console.log('2 < 1', 2 < 1);

// eslint-disable-next-line no-self-compare
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

// eslint-disable-next-line no-unused-vars
const getName = (userData) => userData && userData.name; // null check

// || - or

console.log('true || false', true || false);

console.log('false || true', false || true);

console.log('false || false', false || false);

console.log('true || true', true || true);

console.log('7 || 8', 7 || 8); // if first is true returns first

console.log('0 || 8', 0 || 8); // if first is false returns second

const sumWithDefault10Bad = (x, y) => {
  // eslint-disable-next-line no-param-reassign
  y = y || 10;

  return x + y;
};

console.log(sumWithDefault10Bad(1));

const sumWithDefault10 = (x, y = 10) => x + y;

console.log(sumWithDefault10(1));

// switch

// eslint-disable-next-line no-unused-vars
const dotaBot = (value) => {
  switch (value) {
    case 1: {
      console.log('huy');
      break;
    }
    case 2: {
      console.log('pidor');
      break;
    }
    case 3: {
      console.log('mamku ebal');
      break;
    }
    default: {
      console.log('ya livayu');
    }
  }
};

const getGopMessage = (value) => {
  switch (value) {
    case 'net': {
      return 'a esli naidu';
    }
    case 'da': {
      return 'bykanut\'';
    }
    default: {
      return 'sil\'no bykanut\'';
    }
  }
};

// eslint-disable-next-line no-unused-vars
const getPopMessage = (value) => {
  switch (value) {
    case 'net': {
      return 'vo slavu satany';
    }
    case 'da': {
      return 'ot podrugi do raya';
    }
    default: {
      return 'dai deneg';
    }
  }
};

// bad callback example jacob collier is the best
const bot = (command, messageGetter) => {
  console.log(messageGetter(command));
};

console.log(bot('da', getGopMessage));

// for loop

// eslint-disable-next-line no-unused-vars
const amazingBands = [
  'radiohead',
  'arctic monkeys',
  'oomori seiko',
  'mitya berkhin',
  'mooncake',
  'suraev',
  'gruppa teh pazanov kotorye vyshli s rikenbackerami po 2k za kajdyi kak budto igrali v pervyi raz muzyku i drug s drugom',
  'jacob collier',
  'snarky puppy',
];

// eslint-disable-next-line no-unused-vars
const findIndex = (items, item) => {
  for (let i = 0; i < items.length; i += 1) {
    if (items[i] === item) {
      return i;
    }
  }

  return -1;
};

// Doesn't work
// eslint-disable-next-line no-unused-vars
const findIndexWithForEach = (items, itemToFind) => {
  // eslint-disable-next-line consistent-return
  items.forEach((item, index) => {
    if (item === itemToFind) {
      return index;
    }
  });

  return -1;
};

// console.log('index', findIndex(amazingBands, 'jacob collier'));

// console.log('index with forEach', findIndexWithForEach(amazingBands, 'jacob collier'));

// ternary, array.find, array.filter, array.sort

// ternary

// eslint-disable-next-line no-constant-condition
const ternaryTrue = true ? 'first' : 'second';

console.log(ternaryTrue);

// eslint-disable-next-line no-constant-condition, no-unused-vars
const ternaryFalse = false ? 'first' : 'second';