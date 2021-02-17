# Battle

## General idea

Write a function that handles a battle between two parties and produces battle log as its output.

## Phase 1

### Game state

```
{
  party1: [Unit],
  party2: [Unit],
  turnQueue: [string], // Unit unique id
}
```

### Unit object schema

```
{
  id: string, // unique id
  name: string,
  hp: number,
  attack: number,
  defence: number,
  agility: number,
}
```

### Turn system

* Each turn it should calculate a turn queue: 50 turns
* Compare agility, the character / enemy with higher agility should be higher in the queue
* If agility is equal pick order randomly

```
[string] // array of unique Unit ids
```

### Basic AI

* Attacks target with lowest hp
* If hp is the same, attacks the target with lowest defence
* If defense is the same, picks target randomly

### Game flow

* If a unit dies, remove it from one of the GameState parties
* After unit action, check the remaining party members, if one of the parties is empty finish the
game

Game loop example that doesn't work 100%

```
const battleRecursive = (party1, party2, initialLog) => {
  const { gameState, turnLog } = nextTurn(party1, party2);

  const battleLog = combineLogs(initialLog, turnLog);

  if (isGameOver(gameState)) {
    return battleLog;
  }

  return battleRecursive(gameState.party1, gameState.party2, battleLog);
};
```

### Log structure

```
[
  {
    turnNumber: number,
    attacker: Unit,
    targetBefore: Unit,
    targetAfter: Unit,
    gameStateAfter: GameState,
  }
]
```

## Phase 2

// abilities

// mp / ap

// elemental effects

// status effects

// miss hit

// enemy party generator

## Phase 3

// consumables
// equipment
