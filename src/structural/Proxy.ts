class Car {
  drive() {
    return "driving";
  }
}

class CarProxy extends Car {
  driver: Driver;
  constructor(driver) {
    super();
    this.driver = driver;
  }

  drive() {
    if (this.driver.age < 18)
      return "too young to drive";
    return new Car().drive();
  }
}

class Driver {
  age: number;
  constructor(age) {
    this.age = age;
  }
}

export { Car, CarProxy, Driver };