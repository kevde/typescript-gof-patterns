import 'mocha';
import { expect } from 'chai';
import { Soldier, Jedi, JediAdapter } from 'src/structural/Adapter';

describe('Adapter tests', () => {
  it('should both Soldier and JediAdapter has attack function', () => {
    const stormtrooper = new Soldier(1);
    const yoda = new JediAdapter(new Jedi(10));
    expect(yoda.attack()).to.equal(stormtrooper.attack() * 1000);
  });
});