function GameObject() {}

GameObject.prototype.init = function init(name, position) {
  this.name = name;
  this.position = position;
};

GameObject.prototype.move = function move(newPosition) {
  console.log(`${this.name} is moving from ${JSON.stringify(this.position)} to ${JSON.stringify(newPosition)}`);

  this.position = newPosition;
};

function Warrior() {}

Warrior.prototype = new GameObject();

Warrior.prototype.init = function init(name, position) {
  GameObject.prototype.init.call(this, name, position);
  this.hp = 100;
  this.damage = 20;
};

Warrior.prototype.kill = function kill() {
  console.log(`${this.name} dies`);
};

Warrior.prototype.takeDamage = function takeDamage(damage) {
  this.hp -= damage;

  console.log(`${this.name} takes ${damage} damage, remaining hp: ${this.hp}`);

  if (this.hp <= 0) {
    this.kill();
  }
};

Warrior.prototype.hit = function hit(enemy) {
  enemy.takeDamage(this.damage);
};

Warrior.prototype.instantKill = function instantKill(enemy) {
  enemy.takeDamage(9999999999999999999999999);
};

const chenWarrior = new Warrior();
chenWarrior.init('chen warrior', { x: 0, y: 0 });

const bobWarrior = new Warrior();
bobWarrior.init('bob warrior', { x: 0, y: 0 });

bobWarrior.move({ x: 20, y: 30 });
bobWarrior.takeDamage(12312321);
