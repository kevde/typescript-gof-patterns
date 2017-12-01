import 'mocha';
import { expect } from 'chai';
import { Car, CarProxy, Driver } from 'src/structural/Proxy';

describe('Proxy tests', () => {
  it('Create a proxy which validates a driver if adult or not', () => {
    var driver = new Driver(28);
    var kid = new Driver(10);

    var car = new CarProxy(driver);
    expect(car.drive()).to.equal('driving');

    car = new CarProxy(kid);
    expect(car.drive()).to.equal('too young to drive');
  });
});