import 'mocha';
import { expect } from 'chai';
import Sheep from 'src/creational/Prototype';

describe('Prototype tests', () => {
  it('should clone a certain sheep', () => {
    var sheep = new Sheep('dolly', 10.3);
    var dolly = sheep.clone();
    expect(dolly.name).to.equal('dolly');
    expect(dolly.weight).to.equal(10.3);
    expect(dolly).to.be.instanceOf(Sheep);
    expect(dolly === sheep).to.be.false;
  });
});