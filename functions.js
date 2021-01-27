function myFunction() {
  console.log('myFunction called this console.log');
}

myFunction();

function functionThatCallsAnotherFunction() {
  myFunction();
}

functionThatCallsAnotherFunction();

function functionWithArgument(someArgument) {
  console.log(someArgument);
}

functionWithArgument(2);

function functionWithReturnValue() {
  return 4;
}

const returnValue = functionWithReturnValue();

console.log(returnValue);

function functionWithArgumentAndReturnValue(x) {
  return x;
}

const anotherReturnValue1 = functionWithArgumentAndReturnValue(5);

const anotherReturnValue2 = functionWithArgumentAndReturnValue(functionWithArgumentAndReturnValue);

console.log(anotherReturnValue1);

console.log(anotherReturnValue2);

function multiplyThree(x, y, z) {
  return x * y * z;
}

console.log(multiplyThree(2, 3, 4));

function withRestParameters(...anyName) {
  console.log(anyName);

  return 4;
}

withRestParameters(1);
withRestParameters(1, 2, 3);
withRestParameters(1, 2, 3, 5);

function withOneParamAndRest(x, y, ...args) {
  console.log(x);
  console.log(y);
  console.log(args[1]);
}

withOneParamAndRest(1, 2, 3, 5);

function functionWithDestructuring({
  a, b, c, d,
}) {
  console.log(a, b, c, d);
}

const wow = {
  d: 23232, b: 1, c: 'loh', a: {},
};

functionWithDestructuring(wow);

// Coming next
const arrowFunction = (x) => x;
