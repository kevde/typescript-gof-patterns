class Car {
  drive() {
    return "driving";
  }
}

class CarProxy extends Car {
  constructor(driver) {}

  drive() {
    // ** Disallow the driver to drive if his age is less than 18
    // message the following: 'too young to drive'
  }
}

class Driver {
  age: number;
  constructor(age) {
    this.age = age;
  }
}

export { Car, CarProxy, Driver };