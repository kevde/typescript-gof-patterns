import 'mocha';
import { expect } from 'chai';
import { AbstractCarFactory, BMWCarFactory, ToyotaCarFactory, BronzeChasis, AluminumChasis, BMWWheel, ToyotaWheel } from 'src/creational/AbstractFactory';

describe('AbstractFactory tests', () => {
  it('should create a Japanese car from an abstract factory', () => {
    const carFactory = AbstractCarFactory.getFactory('Japan');
    const carCreated = carFactory.createCar();
    expect(carFactory).to.be.instanceof(ToyotaCarFactory);
    expect(carCreated.wheel).to.be.instanceof(ToyotaWheel);
    expect(carCreated.chasis).to.be.instanceof(BronzeChasis);
  });

  it('should create a German car from an abstract factory', () => {
    const carFactory = AbstractCarFactory.getFactory('Germany');
    const carCreated = carFactory.createCar();
    expect(carFactory).to.be.instanceof(BMWCarFactory);
    expect(carCreated.wheel).to.be.instanceof(BMWWheel);
    expect(carCreated.chasis).to.be.instanceof(AluminumChasis);
  });
});