import 'mocha';
import { expect } from 'chai';
import Person from 'src/creational/Singleton';

describe('Singleton tests', () => {
  it('should check if that person still is the same even if instantiated twice', () => {
    var john = new Person();
    var john2 = new Person();

    expect(john).to.equal(john2);
    expect(john === john2).to.be.true;
  });
});