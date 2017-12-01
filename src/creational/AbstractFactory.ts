abstract class Wheel {
  producer: String;
}

abstract class Chasis {
  metal: String;
}


//** Objects to be created **/
class Car {
  wheel: Wheel;
  chasis: Chasis;
  constructor(wheel, chasis) {
    this.wheel = wheel;
    this.chasis = chasis;
  }
}

class BMWWheel extends Wheel {
  constructor() {
    super();
    this.producer = 'BMW';
  }
}

class ToyotaWheel extends Wheel {
  constructor() {
    super();
    this.producer = 'Toyota';
  }
}

class AluminumChasis extends Chasis {
  constructor() {
    super();
    this.metal = 'Aluminum';
  }
}

class BronzeChasis extends Chasis {
  constructor() {
    super();
    this.metal = 'Bronze';
  }
}

abstract class AbstractCarFactory {
  abstract createWheel(): Wheel;
  abstract createChasis(): Chasis;

  static getFactory(country) {
    switch (country) {
      case 'Japan':
        {
          return new ToyotaCarFactory();
        }
      case 'Germany':
        {
          return new BMWCarFactory();
        }
    }
  }

  createCar() {
    return new Car(this.createWheel(), this.createChasis());
  }
}

class ToyotaCarFactory extends AbstractCarFactory {
  createWheel() {
    return new ToyotaWheel();
  }

  createChasis() {
    return new BronzeChasis();
  }
}

class BMWCarFactory extends AbstractCarFactory {
  createWheel() {
    return new BMWWheel();
  }

  createChasis() {
    return new AluminumChasis();
  }
}

export { AbstractCarFactory, BMWCarFactory, ToyotaCarFactory, BronzeChasis, AluminumChasis, BMWWheel, ToyotaWheel };