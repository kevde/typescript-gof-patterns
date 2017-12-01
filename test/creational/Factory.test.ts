import 'mocha';
import { expect } from 'chai';
import BmwFactory from 'src/creational/Factory';

describe('Factory tests', () => {
  it('should create a BMW car from a factory', () => {
    const bmwFactory = new BmwFactory();
    const x5 = bmwFactory.create('X5');
    const x6 = bmwFactory.create('X6');

    expect(x5.price).to.equal(108000);
    expect(x6.price).to.equal(111000);
    expect(x5.maxSpeed).to.equal(300);
    expect(x6.maxSpeed).to.equal(320);
  });
});