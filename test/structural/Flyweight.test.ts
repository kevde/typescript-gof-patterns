import 'mocha';
import { expect } from 'chai';
import colorFactory from 'src/structural/Flyweight';

describe('Flyweight tests', () => {
  it('should not duplicate created colors inside the colorFactory', () => {
    colorFactory.create('RED');
    colorFactory.create('RED');
    colorFactory.create('RED');
    colorFactory.create('YELLOW');
    colorFactory.create('YELLOW');
    expect(Object.keys(colorFactory.colors)).to.have.lengthOf(2);
  });
});