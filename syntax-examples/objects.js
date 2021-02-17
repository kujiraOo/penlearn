/* eslint-disable no-console */

// eslint-disable-next-line no-unused-vars
const emptyObject = {};// an empty object

const notEmptyObject = {
  a: 4, // assigning a value (property of the object)
  b: 5,
  c: 'some string',
};// object with 2 numbers and 1 string

const nestedObject = { // object with object in it and number and string in object in object
  someProp: {
    c: 'ok',
  },
  anotherProp: {
    d: 'another value',
    moreNestedProperty: {},
  },
  veryAnotherProp: 1,
};

// Accessing properties of an object

// 'some string', accessing a value. something get 'some string' value,
// also it is variables and get his own house in memory
// eslint-disable-next-line no-unused-vars
const something = notEmptyObject.c;

// {}, accessing a nested property. same with previous but get (access) some nested property
// eslint-disable-next-line no-unused-vars
const somethingNested = nestedObject.anotherProp.moreNestedProperty;

// if you want to create variables with same name as property of already created object you can use
// this way
// eslint-disable-next-line no-unused-vars
const { someProp } = nestedObject;
// eslint-disable-next-line no-unused-vars
const { anotherProp } = nestedObject;

// same as const { veryAnotherProp } = nestedObject;
// eslint-disable-next-line prefer-destructuring, no-unused-vars
const veryAnotherProp = nestedObject.veryAnotherProp;

// Assigning values to properties of an object
notEmptyObject.c = 'another value'; // re-assigning value of the property. change value of c of notEmptyObject to another value

const amazingValue = 10; // new variables
const anotherAmazingValue = 20;

const amazingObject = {
  amazingValue, // shorthand assignment
  b: anotherAmazingValue, // regular assignment
  someObjectHere: { a: 3 }, // its just an object
  d: 5,
}; // create object with 10 , 20 , and object with 3

// eslint-disable-next-line no-unused-vars
const objectWithSpread = {
  something: 3,
  ...amazingObject, // spreading an object
}; // spreading take all properties of an object one by one and copy them in another object

const shallowCopyOfAmazingObject = {
  ...amazingObject,
}; // different address in memory

const copyOfAmazingObject = {
  ...amazingObject,
  someObjectHere: { ...amazingObject.someObjectHere },
}; // different address in memory

const { someObjectHere } = amazingObject;
someObjectHere.a = 4;
amazingObject.d = 6;

const anotherObjectHere = amazingObject.someObjectHere; // same with 57 line
const copyOfSomeObjectHere = { ...anotherObjectHere }; // spreading like shallowCopy

shallowCopyOfAmazingObject.someObjectHere.a = 4;

copyOfAmazingObject.someObjectHere.a = 5;

copyOfSomeObjectHere.a = 6;

// console.log('anotherObjectHere', anotherObjectHere);
// console.log('amazingObject.someObjectHere', amazingObject.someObjectHere);
// console.log('copyOfAmazingObject.someObjectHere', copyOfAmazingObject.someObjectHere);
// console.log('copyOfSomeObjectHere', copyOfSomeObjectHere);

const weirdPropertyName = 'some space here'; // new variable with string

// eslint-disable-next-line no-unused-vars
const objectWithWeirdPropertyNames = {
  [weirdPropertyName]: 'ok', // create KEY with same name as value of variables
  // eslint-disable-next-line no-useless-computed-key
  [4]: 'ofrfr',
  // eslint-disable-next-line no-useless-computed-key
  ['ok']: 'not ok',
};
// COMMON OBJECT FUNCTIONS / KEYWORDS

// console.log(objectWithWeirdPropertyNames);

const objectWithPropertyToDelete = { propertyToDelete: 'delete me' };

// console.log(objectWithPropertyToDelete);

delete objectWithPropertyToDelete.propertyToDelete; // deletes property of an object

// console.log(objectWithPropertyToDelete);

objectWithPropertyToDelete.propertyToNotDelete1 = 'don\'t delete';
objectWithPropertyToDelete.propertyToNotDelete2 = 'don\'t delete';
objectWithPropertyToDelete.propertyToNotDelete3 = 'don\'t delete';

const objectWithKeys = {
  a: [1, 2, 3, 4],
  b: 4,
  nyaaa: 5,
  nyaaa2: 'some string',
};

const keysOfObjectWithKeys = Object.keys(objectWithKeys); // call to "white" keys

const valuesOfObjectWithKeys = Object.values(objectWithKeys); // call to values of properties

objectWithKeys.a[10] = 'anything';
objectWithKeys.a[6] = undefined;
console.log(objectWithKeys, keysOfObjectWithKeys, valuesOfObjectWithKeys);
console.log(objectWithKeys.a[6]);
console.log(objectWithKeys.a.length);
