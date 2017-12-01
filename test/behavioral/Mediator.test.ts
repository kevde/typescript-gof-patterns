import 'mocha';
import { expect } from 'chai';
import { TrafficTower, Airplane } from 'src/behavioral/Mediator';

describe('Mediator tests', () => {
  it('should get other plane position from trafficTower mediator', () => {
    const trafficTower = new TrafficTower();
    const boeing1 = new Airplane(10, trafficTower);
    const boeing2 = new Airplane(15, trafficTower);
    const boeing3 = new Airplane(55, trafficTower);

    expect(boeing1.requestPositions()).to.deep.equals([10, 15, 55]);
  });
});