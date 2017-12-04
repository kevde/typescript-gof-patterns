//Equipment
class Equipment {
  price: any;
  name: String;
  getPrice() {
    return this.price || 0;
  }

  getName() {
    return this.name;
  }

  setName(name) {
    this.name = name;
  }
}

// --- composite ---
// ** Create Composite **

class Cabbinet extends Composite {
  constructor() {
    super();
    this.setName('cabbinet');
  }
}

// --- leafs ---

// ** Create Leafs **
// FloppyDisk = 70
// HardDrive = 250
// Memory = 280

export { Cabbinet, FloppyDisk, HardDrive, Memory };