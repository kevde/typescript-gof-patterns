class ShopFacade {
  discount: Discount;
  shipping: Shipping;
  fees: Fees;
  constructor() {
    this.discount = new Discount();
    this.shipping = new Shipping();
    this.fees = new Fees();
  }

  calc(price) {
    price = this.discount.calc(price);
    price = this.fees.calc(price);
    price += this.shipping.calc();
    return price;
  }
}

class Discount {
  percent = 0.9;
  calc(value) {
    return value * this.percent;
  }
}

class Shipping {
  percent = 5;
  calc() {
    return this.percent;
  }
}

class Fees {
  percent = 1.05;
  calc(value) {
    return value * this.percent;
  }
}

export default ShopFacade;