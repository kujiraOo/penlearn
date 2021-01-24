const emptyObject = {};

const notEmptyObject = {
  a: 4, // assigning a value
  b: 5,
  c: 'some string',
};

const nestedObject = {
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
const something = notEmptyObject.c; // 'some string', accessing a value
const somethingNested = nestedObject.anotherProp.moreNestedProperty; // {}, accessing a nested property

const { someProp } = nestedObject;
const { anotherProp } = nestedObject;

const veryAnotherProp = nestedObject.veryAnotherProp; // same as const { veryAnotherProp } = nestedObject;

// Assigning values to properties of an object
notEmptyObject.c = 'another value'; // re-assigning value of the property

const amazingValue = 10;
const anotherAmazingValue = 20;

const amazingObject = {
  amazingValue,
  b: anotherAmazingValue,
  someObjectHere: { a: 3 },
};

const objectWithSpread = {
  something: 3,
  ...amazingObject, // spreading an object
};

const shallowCopyOfAmazingObject = {
  ...amazingObject,
}; // different address in memory

const copyOfAmazingObject = {
  ...amazingObject,
  someObjectHere: { ...amazingObject.someObjectHere },
}; // different address in memory

const anotherObjectHere = amazingObject.someObjectHere;
const copyOfSomeObjectHere = { ...anotherObjectHere };

shallowCopyOfAmazingObject.someObjectHere.a = 4;

copyOfAmazingObject.someObjectHere.a = 5;

copyOfSomeObjectHere.a = 6;

// console.log('anotherObjectHere', anotherObjectHere);
// console.log('amazingObject.someObjectHere', amazingObject.someObjectHere);
// console.log('shallowCopyOfAmazingObject.someObjectHere', shallowCopyOfAmazingObject.someObjectHere);
// console.log('copyOfAmazingObject.someObjectHere', copyOfAmazingObject.someObjectHere);
// console.log('copyOfSomeObjectHere', copyOfSomeObjectHere);

const weirdPropertyName = 'some space here';

const objectWithWeirdPropertyNames = {
  [weirdPropertyName]: 'ok',
  [4]: 'ofrfr',
};

console.log(objectWithWeirdPropertyNames);
console.log(objectWithWeirdPropertyNames[weirdPropertyName]);

// COMMON OBJECT FUNCTIONS / KEYWORDS

const objectWithPropertyToDelete = { propertyToDelete: 'delete me' };

// console.log(objectWithPropertyToDelete);

delete objectWithPropertyToDelete.propertyToDelete; // deletes property of an object

// console.log(objectWithPropertyToDelete);

objectWithPropertyToDelete.propertyToNotDelete1 = 'don\'t delete';
objectWithPropertyToDelete.propertyToNotDelete2 = 'don\'t delete';
objectWithPropertyToDelete.propertyToNotDelete3 = 'don\'t delete';

const objectWithKeys = {
  a: 3,
  b: 4,
  nyaaa: 5,
  nyaaa2: 'some string',
};

const keysOfObjectWithKeys = Object.keys(objectWithKeys);

console.log(keysOfObjectWithKeys);

const valuesOfObjectWithKeys = Object.values(objectWithKeys);

console.log(valuesOfObjectWithKeys);
