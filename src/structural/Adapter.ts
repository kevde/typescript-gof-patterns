interface SoldierInterface {
  attack: () => number;
}

class Soldier implements SoldierInterface {
  level: number;
  constructor(level) {
    this.level = level;
  }

  attack() {
    return this.level * 1;
  }
}

class Jedi {
  level: number;
  constructor(level) {
    this.level = level;
  }

  attackWithSaber() {
    return this.level * 100;
  }
}

// ** Create JediAdapter

export { Soldier, Jedi, JediAdapter };