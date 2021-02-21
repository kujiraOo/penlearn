const Create = require('./unit');

function RandomForUnit(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min
};

let Alies = [];
let Enemy = [];

Allies = Alies.push(Create.CreateAlly('Hero1', RandomForUnit(10, 25), RandomForUnit(5, 10), RandomForUnit(6, 20), RandomForUnit(10, 20), RandomForUnit(0, 15)));
Allies = Alies.push(Create.CreateAlly('Hero2', RandomForUnit(10, 25), RandomForUnit(5, 10), RandomForUnit(6, 20), RandomForUnit(10, 20), RandomForUnit(0, 15)));
Allies = Alies.push(Create.CreateAlly('Hero3', RandomForUnit(10, 25), RandomForUnit(5, 10), RandomForUnit(6, 20), RandomForUnit(10, 20), RandomForUnit(0, 15)));
Allies = Alies.push(Create.CreateAlly('Hero4', RandomForUnit(10, 25), RandomForUnit(5, 10), RandomForUnit(6, 20), RandomForUnit(10, 20), RandomForUnit(0, 15)));

Enemy = Enemy.push(Create.CreateEnemy('Hero1', RandomForUnit(10, 25), RandomForUnit(5, 10), RandomForUnit(6, 20), RandomForUnit(10, 20), RandomForUnit(0, 15)));
console.log(Alies, Enemy);