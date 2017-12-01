class BmwFactory {
  create(type): Bmw {
    if (type === 'X5')
      return new Bmw(type, 108000, 300);
    if (type === 'X6')
      return new Bmw(type, 111000, 320);
  }
}

class Bmw {
  model: String;
  price: number;
  maxSpeed: number;
  constructor(model, price, maxSpeed) {
    this.model = model;
    this.price = price;
    this.maxSpeed = maxSpeed;
  }
}

export default BmwFactory;