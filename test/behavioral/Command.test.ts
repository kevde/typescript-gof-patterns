import 'mocha';
import { expect } from 'chai';
import { Cockpit, Turbine, OnCommand, OffCommand } from 'src/behavioral/Command';

describe('Command tests', () => {

  it('turn off/on test', () => {
    var turbine = new Turbine();
    const onCommand = new OnCommand(turbine);
    const cockpit = new Cockpit(onCommand);
    cockpit.execute();
    expect(turbine.state).to.be.true;
  });
});