class Pasta {
  price: number;
  constructor() {
    this.price = 0;
  }
  getPrice(): number {
    return this.price;
  }
}

class Penne extends Pasta {
  constructor() {
    super();
    this.price = 8;
  }
}


class PastaDecorator extends Pasta {
  pasta: Pasta;
  constructor(pasta) {
    super();
    this.pasta = pasta;
  }

  getPrice(): number {
    return this.pasta.getPrice();
  }
}


class SauceDecorator extends PastaDecorator {
  constructor(pasta) {
    super(pasta);
  }

  getPrice() {
    return super.getPrice() + 5;
  }
}

class CheeseDecorator extends PastaDecorator {
  constructor(pasta) {
    super(pasta);
  }

  getPrice() {
    return super.getPrice() + 3;
  }
}

export { Penne, SauceDecorator, CheeseDecorator };