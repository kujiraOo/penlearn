// Arrays

const a = []; // empty array

const b = [1, 2, 3]; // not empty array of numbers

const someConst = 23232;

const c = [ // array containing different types
  1,
  'string',
  {
    someProperty: 'some value',
  },
  () => {},
  function unnamedFunction() {},
  [
    [],
  ],
  someConst,
];

// Array spread

const arrayToSpread = [{}, null, undefined, 3];

// console.log(arrayToSpread);

// console.log(...arrayToSpread); // same as console.log(1, 2, 3)

// console.log(...{ a: 2 }); doesn't work with objects

const shallowCopyArray = [...arrayToSpread];

const sameArray = arrayToSpread;

// console.log(arrayToSpread === shallowCopyArray);

// console.log(arrayToSpread === sameArray);

// console.log(arrayToSpread[0].ok);

// console.log(arrayToSpread[1].ok); // throws an error

// console.log(arrayToSpread[2].ok); // throws an error

// console.log(arrayToSpread.length);

// console.log(arrayToSpread[4]);

// console.log(arrayToSpread[arrayToSpread.length - 1]);

// Multidimensional array

const array2D = [
  [1, 2, 3],
  [4, 5, 6],
];

// console.log(array2D[0]);

// console.log(array2D[0][0]);

// console.log(array2D[1]);

// console.log(array2D[1][1]);

// console.log(array2D[1][2]);

// console.log(array2D[0][3]);

// console.log(array2D[2][0]); throws an error

const array3D = [
  [
    [1, 2, 3],
    [4, 5, 6],
  ],
  [
    [1, 2, 3],
    [4, 5, 6],
  ],
];

console.log(array3D[0][0][2]);

console.log(array3D[1][1][1]);
