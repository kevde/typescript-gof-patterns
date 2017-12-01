import 'mocha';
import { expect } from 'chai';
import { Cabbinet, FloppyDisk, HardDrive, Memory } from 'src/structural/Composite';

describe('Composite tests', () => {
  it('should add all prices of other components in cabinet', () => {
    const cabbinet = new Cabbinet();
    cabbinet.add(new FloppyDisk());
    cabbinet.add(new HardDrive());
    cabbinet.add(new Memory());

    expect(cabbinet.getPrice()).to.equal(600);
  });
});