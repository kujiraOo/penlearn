/* eslint-disable no-console */

// require things defined in node.js fs module
const fs = require('fs');

// require things defined in another file
const math = require('./math');

console.log(math);

// read contents of current directory
console.log(fs.readdirSync('./'));

console.log(math.PI);

console.log(math.multiply(1, 2));

// declared in file scope
const a = 25;

// sees variables declared in file scope
// braces usually define scope
const someFunction = () => {
  console.log(a);

  // declared in function scope, not visible outside function
  const b = 40;
};

someFunction();

// will throw an error, cause b is not defined
// console.log(b);

const ifScope = (condition) => {
  let c;

  // if has its own scope
  if (condition) {
    // eslint-disable-next-line no-unused-vars
    const b = 13;

    // var has weird scope, don't use it
    // eslint-disable-next-line vars-on-top, no-var
    var d = 12312;

    c = 10;
  } else {
    // eslint-disable-next-line no-unused-vars
    const b = 25;

    c = 20;
  }

  // throws an error, cause b is not defined
  // console.log(b);

  // eslint-disable-next-line block-scoped-var
  console.log(d);
  console.log(c);
};

ifScope(true);

const switchScope = (value) => {
  switch (value) {
    case 'a': { // create separate scope for each case, without braces will throw an error
      const b = 4;
      console.log(b);
      break;
    }
    case 'b': {
      const b = 5;
      console.log(b);
      break;
    }
    default: {
      console.log('default');
    }
  }
};

switchScope('b');

const forScope = () => {
  const numbers = [1, 2, 3, 4];

  // for scope begins in for initialization
  for (let i = 0; i < numbers.length; i += 1) {
    console.log(numbers[i]);
  }

  // will throw an error
  // console.log(i);
};

forScope();
