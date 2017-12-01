class TrafficTower {
  airplanes: Airplane[];

  constructor() {
    this.airplanes = [];
  }

  requestPositions() {
    return this.airplanes.map(airplane => {
      return airplane.position;
    });
  }
}

class Airplane {
  position: number;
  trafficTower: TrafficTower;
  
  constructor(position, trafficTower) {
    this.position = position;
    this.trafficTower = trafficTower;
    this.trafficTower.airplanes.push(this);
  }

  requestPositions() {
    return this.trafficTower.requestPositions();
  }
}


export { TrafficTower, Airplane };