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

class JediAdapter implements SoldierInterface {
  jedi: Jedi;
  constructor(jedi) {
    this.jedi = jedi;
  }

  attack() {
    return this.jedi.attackWithSaber();
  }
}

export { Soldier, Jedi, JediAdapter };