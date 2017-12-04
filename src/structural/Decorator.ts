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

// Goal: Create Decorators for the following
// SauceDecorator = Add 5 in Price;
// CheeseDecorator = Add 3 in Price;

export { Penne, SauceDecorator, CheeseDecorator };